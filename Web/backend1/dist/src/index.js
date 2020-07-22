"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("../config/express");
var users_1 = require("../routes/users");
var videos_1 = require("../routes/videos");
express_1.app.get('/', function (req, res) {
    res.status(200).json({ msg: 'OK' });
});
express_1.app.use('/users', users_1.router);
express_1.app.use('/videos', videos_1.router);
express_1.app.listen(3000, function () { console.log('Escuchando en el puerto: 3000'); });
