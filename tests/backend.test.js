const getTickets = require("../routes/api/getTickets");
const axios = require("axios");

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res)

    return res;
};
const mockRequest = (sessionData) => {
    return {
        session: { data: sessionData },
    };
};

jest.mock("axios");

describe("check zendesk", () => {
    test("returns all tickets from zendesk", async () => {
        const testTickets = {
            data: {
                tickets: [
                    {
                        id: 1,
                    },
                ],
                meta: {}
            },
        };

        axios.get.mockResolvedValue(testTickets);
        const req = mockRequest({});
        const res = mockResponse();
        await getTickets(req, res);
        expect(res.json).toHaveBeenCalledWith([[{id: 1}]])
    });
});
