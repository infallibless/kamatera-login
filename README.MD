
# kamatera-login

A bulk login testing script for Kamatera. This tool reads a list of email-password pairs from a file and attempts to log into Kamatera accounts, logging the results for each attempt. Ideal for administrators who need to validate large numbers of accounts efficiently. **For authorized use only.**

## Features

- **Bulk Login Attempts:** Reads multiple email-password combinations from a text file.
- **Error Handling:** Captures errors and logs unsuccessful login attempts.
- **Logging and Reporting:** Displays clear messages for each login attempt result.

## Requirements

- **Node.js** (version 12 or higher)
- **node-fetch** library (for HTTP requests)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/infallibless/kamatera-login.git
   ```

2. Navigate into the project directory:
   ```bash
   cd kamatera-login
   ```

3. Install dependencies:
   ```bash
   npm install node-fetch
   ```

## Usage

1. Create a text file (`x.txt`) in the project folder. Each line should contain an email and password separated by a colon, like so:
   ```
   user1@example.com:password123
   user2@example.com:password456
   ```

2. Run the script:
   ```bash
   node kamatera.js
   ```

3. The script will attempt to log into each account in the file and output the results to the console.

## Example Output

```
login successful for user1@example.com
login failed for user2@example.com
skipping invalid line -> user3@example
```

## Important Note

This tool is for educational and authorized use only. Unauthorized use of this tool may violate Kamatera’s terms of service and applicable laws. Use this tool only on accounts you have permission to access.

## Copyright

© 2024 raynex. All rights reserved.

All files in this repository, unless otherwise noted, are released under the MIT License. By using, distributing, or modifying this code, you acknowledge the copyright holder's rights and agree to retain this copyright notice in any redistribution.

## Disclaimer

**kamatera-login** is provided "as is" without any warranties. The authors and contributors are not responsible for any misuse of this tool or damages arising from its use.
