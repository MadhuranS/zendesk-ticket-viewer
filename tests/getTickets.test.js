const getTickets = require("../routes/api/getTickets");
const axios = require("axios");
const config = require("config");

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
};
const mockRequest = (sessionData) => {
    return {
        session: { data: sessionData },
    };
};

class axiosError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.name = message;
        this.response = { status: errorCode };
    }
}

jest.mock("axios");

describe("test endpoint to get all tickets", () => {
    test("returns the singular ticket that exists", async () => {
        const testTickets = {
            data: {
                tickets: [
                    {
                        id: 1,
                    },
                ],
                meta: {},
            },
        };

        axios.get.mockResolvedValueOnce(testTickets);
        const req = mockRequest({});
        const res = mockResponse();
        await getTickets(req, res);
        expect(res.json).toHaveBeenCalledWith([{ id: 1 }]);
    });
    test("paginate through and return multiple pages", async () => {
        const testTickets = {
            data: {
                tickets: [
                    {
                        id: 1,
                    },
                ],
                meta: {
                    has_more: true,
                },
                links: {
                    next: "www.test.com",
                },
            },
        };

        const testTickets2 = {
            data: {
                tickets: [
                    {
                        id: 2,
                    },
                ],
                meta: {},
            },
        };
        axios.get.mockResolvedValueOnce(testTickets);
        axios.get.mockResolvedValueOnce(testTickets2);
        const req = mockRequest({});
        const res = mockResponse();
        await getTickets(req, res);
        expect(axios.get).toHaveBeenLastCalledWith(`www.test.com`, {
            headers: { Authorization: `${config.get(`zendeskSecret`)}` },
        });
        expect(res.json).toHaveBeenCalledWith([{ id: 1 }, { id: 2 }]);
    });
    test("handle api response error", async () => {
        axios.get.mockRejectedValueOnce(new axiosError("unauthorized", 401));
        const req = mockRequest({});
        const res = mockResponse();
        await getTickets(req, res);
        expect(res.status).toHaveBeenCalledWith(401);
    });
    test("handle internal server error", async () => {
        axios.get.mockRejectedValueOnce(new Error("Server error"));
        const req = mockRequest({});
        const res = mockResponse();
        await getTickets(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
    });
});
