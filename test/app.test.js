const app = require("../app");
const request = require("supertest");

describe("GET /api/whoami", () => {
  it("should return ipaddress, language and software from header", async () => {
    const res = await request(app)
      .get("/api/whoami")
      .set("Accept-Language", "test language")
      .set("User-Agent", "test user-agent");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("ipaddress");
    expect(res.body).toHaveProperty("language", "test language");
    expect(res.body).toHaveProperty("software", "test user-agent");
  });
});
