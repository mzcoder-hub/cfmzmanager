# Cloudflare Manager

Cloudflare Manager is a Node.js package for managing DNS records and subdomains in Cloudflare.

## Installation

To install Cloudflare Manager, use npm:

```bash
npm install cfmzmanager
```

## Usage

```javascript
const CloudflareManager = require("cfmzmananger");

const manager = new CloudflareManager();

// Add subdomain example.com
const payload = { domain: "example.com" };
manager
  .addSubdomain(payload)
  .then((responseData) => {
    console.log(responseData); // Response data from Cloudflare API
  })
  .catch((error) => {
    console.error(error); // Error if DNS record creation failed
  });
```

## Configuration

Before using Cloudflare Manager, make sure to set up a config.json file with your Cloudflare credentials:

```json
{
  "Cloudflare": {
    "email": "your_email@example.com",
    "apiKey": "your_api_key",
    "zoneId": "your_zone_id",
    "ipAddress": "your_server_ip_address"
  }
}
```

## API

`new CloudflareManager()`

Creates a new instance of CloudflareManager.

`addSubdomain(payload)`

Adds a subdomain to Cloudflare DNS records.

- `payload` (Object): An object containing the domain name.
  - `domain` (String): The domain name to add.

Returns a Promise that resolves with the response data from the Cloudflare API.

## License

This project is licensed under the GPL LICENSE - see the LICENSE file for details.
