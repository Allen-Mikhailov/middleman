const http = require('http');
var request = require('request');

const port = 8080

const channels = {
	Death: "https://discord.com/api/webhooks/954896573861597245/ZPqd5xwcx_AFo9OcsYDxqHHqHjafT75IyluMqzJqbaL5dydS6ItGB_goEq5wlDdobZjw",
	Grip: "https://discord.com/api/webhooks/954907659750998086/O7OWdtC-8cIg7Wnr6_CC6zNVt879fBBP9GxJ3sJI-wkovJII54NPoaRokdwzebPoD5xa"
}

const requestListener = function(req, res) {
    const url = req.url
    const botname = "SERVER"

    if (url.startsWith("/dis")) {

        const chunks = [];
        req.on('data', chunk => chunks.push(chunk));
        req.on('end', () => {
            const reqdata = JSON.parse(Buffer.concat(chunks).toString());

            console.log(reqdata)

            const data = {username: botname, ["content"]: reqdata.content}

            request({
                url: channels[reqdata.channel],
                method: "POST",
                json: true,   // <--Very important!!!
                body: data
            }, function (error, response, body){
                console.log("Message Sent");
            });
        })

        console.log("Successfully handled request!")
        res.writeHead(200);
        res.end("Success");
    } else {
        res.writeHead(200);
        res.end("The Server Is online!");
    }
}

const server = http.createServer(requestListener);
server.listen(port);
console.log("Server listening at port "+port)