const http = require('http');
var request = require('request');

const channels = {
	Death: "https://discord.com/api/webhooks/954896573861597245/ZPqd5xwcx_AFo9OcsYDxqHHqHjafT75IyluMqzJqbaL5dydS6ItGB_goEq5wlDdobZjw",
	Grip: "https://discord.com/api/webhooks/954907659750998086/O7OWdtC-8cIg7Wnr6_CC6zNVt879fBBP9GxJ3sJI-wkovJII54NPoaRokdwzebPoD5xa"
}

const requestListener = function (req, res) {
    const url = req.url
    const botname = "SERVER"

    console.log(url)

    if (url.startsWith("/dis")) {
        console.log("Request")
        // nil, "dis", channel, header, subheader, footer
        const args = url.split("/");
        const channel = args[3];
        const content = args[4];

        const data = {["content"]: content}

        request({
            url: channels[channel],
            method: "POST",
            json: true,   // <--Very important!!!
            body: data
        }, function (error, response, body){
            console.log("Message Sent");
        });

        res.writeHead(200);
        res.end("Success");
    } else {
        res.writeHead(200);
        res.end("Hello world");
    }
}

const server = http.createServer(requestListener);
server.listen(8080);