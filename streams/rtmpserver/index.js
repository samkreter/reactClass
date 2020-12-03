const NodeMediaServer = require('node-media-server');


const config = {
    rtmp: {
        port: 1935,
        chunckSize: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30
    },
    http: {
        port: 8080,
        allow_origin: "*"
    }
}


var nms = new NodeMediaServer(config)

nms.run()