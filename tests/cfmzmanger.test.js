const fs = require("fs");
const CloudflareManager = require("./index"); // Assuming your main file is named index.js

// Mock configuration data
const mockConfig = {
  Cloudflare: {
    email: "test@example.com",
    apiKey: "testApiKey",
    zoneId: "testZoneId",
    ipAddress: "testIpAddress",
  },
};

// Mock fs.readFileSync to return mockConfig
jest.mock("fs", () => ({
  readFileSync: jest.fn().mockReturnValue(JSON.stringify(mockConfig)),
}));

describe("CloudflareManager", () => {
  let manager;

  beforeAll(() => {
    manager = new CloudflareManager();
  });

  it("should create a new instance of CloudflareManager", () => {
    expect(manager).toBeInstanceOf(CloudflareManager);
  });

  it("should read config from config.json", () => {
    expect(fs.readFileSync).toHaveBeenCalledWith("config.json");
  });

  it("should add a subdomain", async () => {
    const payload = { domain: "example.com" };
    const responseData = await manager.addSubdomain(payload);
    // Modify assertions according to your response data structure
    expect(responseData).toBeDefined();
  });

  // Add more tests as needed
});
