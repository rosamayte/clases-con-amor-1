"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var uuid_1 = require("uuid");
var userctrl = __importStar(require("../controllers/users"));
exports.router = express_1.default.Router();
//get all
exports.router.get('/', function (req, res) {
    userctrl.getUsers().then(function (users) {
        res.status(200).json({ msg: 'OK', data: users });
    });
});
// obtener x ID
exports.router.get('/:id', function (req, res) {
    userctrl.getUser(req.params.id).then(function (user) {
        if (!user)
            return res.status(403).json({ msg: 'error' });
        delete user.uid;
        res.status(200).json({ msg: 'OK', data: user });
    });
});
// crear usuario
exports.router.post('/', function (req, res) {
    var u = req.body;
    u.uid = uuid_1.v4();
    u.rented = [];
    userctrl.createUser(u).then(function (user) {
        if (!user)
            return res.status(500).json({ msg: 'error' });
        res.status(201).json({ msg: 'OK', data: user });
    });
});
// actualizar usuario
exports.router.patch('/', function (req, res) {
    userctrl.updateUser(req.body).then(function (user) {
        //console.log(user)
        if (!user)
            return res.status(404).json({ msg: 'error', data: {} });
        res.status(200).json({ msg: 'OK', data: user });
    });
});
// borrar
exports.router.delete('/:id', function (req, res) {
    userctrl.deleteUser(req.params.id).then(function (user) {
        if (!user)
            return res.status(404).json({ msg: 'error', data: {} });
        res.status(200).json({ msg: 'OK', data: user });
    });
});
