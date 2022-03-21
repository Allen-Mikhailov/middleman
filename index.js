const https = require('https');

const channels = {
    Death: "https://discord.com/api/webhooks/954896573861597245/ZPqd5xwcx_AFo9OcsYDxqHHqHjafT75IyluMqzJqbaL5dydS6ItGB_goEq5wlDdobZjw",
    Grip: "https://discord.com/api/webhooks/954907659750998086/O7OWdtC-8cIg7Wnr6_CC6zNVt879fBBP9GxJ3sJI-wkovJII54NPoaRokdwzebPoD5xa"
}

const requestListener = function (req, res) {
    const url = req.url
    const botname = "SERVER"

    if (url.startsWith("/dis")) {
        // nil, "dis", channel, 
        const args = url.split("/")

        const options = {
            hostname: 'discord.com',
            port: 443,
            path: '/todos',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }

        const data = {
            username: botname,
            embeds: [
                {
                    fields: [
                        {
                            name: header,
                            value: subheader
                        }
                    ],
                    color: 16518199,
                    footer: {
                        text: footer
                    }
                }
            ]
        }

    }

    res.writeHead(200);
    res.end("Success");

    https.request()
}

const server = https.createServer(requestListener);
server.listen(8080);