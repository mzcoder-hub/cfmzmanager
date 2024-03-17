// index.js
const fs = require("fs");
const request = require("request-promise-native");
const ResponseFormatter = require("responseformatjson");
const { formatDate, extractDate } = require("dformater");

class CloudflareManager {
  constructor() {
    this.config = JSON.parse(fs.readFileSync("config.json"));
  }

  async createDNSRecord(domain) {
    const { email, apiKey, zoneId, ipAddress } = this.config.Cloudflare;

    try {
      const dnsRecord = {
        type: "A",
        name: domain,
        content: ipAddress,
        proxied: true,
      };

      const options = {
        url: `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records/`,
        method: "POST",
        headers: {
          "X-Auth-Key": apiKey,
          "X-Auth-Email": email,
          "Content-Type": "application/json",
        },
        json: dnsRecord,
      };

      const response = await request(options);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }

  async addSubdomain(payload) {
    const domain = payload.domain;
    const responseData = await this.createDNSRecord(domain);
    return ResponseFormatter.success(responseData);
  }
}

module.exports = CloudflareManager;
