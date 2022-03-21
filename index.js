const https = require('http');

const channels = {
    Death: "/api/webhooks/954896573861597245/ZPqd5xwcx_AFo9OcsYDxqHHqHjafT75IyluMqzJqbaL5dydS6ItGB_goEq5wlDdobZjw",
    Grip: "/api/webhooks/954907659750998086/O7OWdtC-8cIg7Wnr6_CC6zNVt879fBBP9GxJ3sJI-wkovJII54NPoaRokdwzebPoD5xa"
}

const requestListener = function (req, res) {
    const url = req.url
    const botname = "SERVER"

    if (url.startsWith("/dis")) {
        // nil, "dis", channel, header, subheader, footer
        const args = url.split("/");
        const channel = args[3];
        const header = args[4];
        const subheader = args[5];
        const footer = args[6];

        const data = JSON.stringify({
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
        })

        const options = {
            hostname: 'discord.com',
            port: 443,
            path: channels[channel],
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }

        const reqe = https.request(options);
        reqe.write(data);
        // console.log(data)
        reqe.end();

        res.writeHead(200);
        res.end("Success");
    } else {
        res.writeHead(200);
        res.end("Hello world");
    }
}

const server = https.createServer(requestListener);
server.listen(8080);