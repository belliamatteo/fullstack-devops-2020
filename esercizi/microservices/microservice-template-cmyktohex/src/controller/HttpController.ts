import {CmykToHex} from '../service/Service';
import {Express} from 'express';

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = (req.query.color as any);
            const convertedColor = CmykToHex(color);

            res.send(convertedColor);
        });
    }
}

export default HttpController;