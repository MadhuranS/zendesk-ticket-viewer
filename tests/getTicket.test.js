const getTicket = require("../routes/api/getTicket");
const axios = require("axios");

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
};
const mockRequest = (params) => {
    return {
        params,
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

describe("test endpoint to get individual ticket", () => {
    test("returns the singular ticket that exists", async () => {
        const testTicket = {
            data: {
                ticket: {
                    id: 1,
                },
            },
        };
        axios.get.mockResolvedValueOnce(testTicket);
        const req = mockRequest({ id: 1 });
        const res = mockResponse();
        await getTicket(req, res);
        expect(res.json).toHaveBeenCalledWith({ id: 1 });
    });
    test("handle API response error", async () => {
        axios.get.mockRejectedValueOnce(new axiosError("unauthorized", 401));
        const req = mockRequest({ id: 1 });
        const res = mockResponse();
        await getTicket(req, res);
        expect(res.status).toHaveBeenCalledWith(401);
    });
    test("handle internal server error", async () => {
        axios.get.mockRejectedValueOnce(new Error("Server error"));
        const req = mockRequest({id: 1});
        const res = mockResponse();
        await getTicket(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
    })
});
