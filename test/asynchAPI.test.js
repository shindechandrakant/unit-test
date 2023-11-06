const fetchData = require("../asynchAPI.js");



describe("Test Async API Calls", () => {
    
    test("1. Test Async Code using Async/Await", async () => {

        let response = JSON.stringify({
            name: "Chandrakant Shinde",
            age: 24,
            email: "chandrakant@chandrakant.dev",
          });
        const data = await fetchData();
        expect(data).toEqual(response);
    });

    test("1. Test Async Code using expect", async () => {

        let response = JSON.stringify({
            name: "Chandrakant Shinde",
            age: 24,
            email: "chandrakant@chandrakant.dev",
          });
        const data = fetchData();
        expect(data).resolves.toEqual(response);
    });

});

