"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVideo = exports.updateVideoRentDown = exports.updateVideoRentUp = exports.updateVideoInfo = exports.getVideo = exports.getVideos = exports.createVideo = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var dir = path_1.default.join(__dirname, '../data');
var data = JSON.parse(fs_1.default.readFileSync(dir + "/videos.json").toString());
exports.createVideo = function (video) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data.push(video)];
            case 1:
                _a.sent();
                return [4 /*yield*/, fs_1.default.writeFileSync(dir + "/videos.json", JSON.stringify(data, null, 2))];
            case 2:
                _a.sent();
                return [4 /*yield*/, video];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getVideos = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getVideo = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var index;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data.findIndex(function (v) { return v.uid === id; })];
            case 1:
                index = _a.sent();
                if (index < 0)
                    return [2 /*return*/, null];
                return [4 /*yield*/, data[index]];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
// export const updateVideo = async( video: IVideo): Promise<IVideo | null> => {
//     const index = await data.findIndex((v: IVideo) => v.uid === video.uid)
//     if(index < 0) return await null
//     data[index] = await video
//     await fs.writeFileSync(`${dir}/videos.json`, JSON.stringify(data,null,2))
//     return await video
// }
exports.updateVideoInfo = function (video) { return __awaiter(void 0, void 0, void 0, function () {
    var index, _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, data.findIndex(function (v) { return v.uid === video.uid; })];
            case 1:
                index = _d.sent();
                if (!(index < 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, null];
            case 2: return [2 /*return*/, _d.sent()];
            case 3:
                if (!video.description) return [3 /*break*/, 5];
                _a = data[index];
                return [4 /*yield*/, video.description];
            case 4:
                _a.description = _d.sent();
                _d.label = 5;
            case 5:
                _b = data[index];
                return [4 /*yield*/, video.genres];
            case 6:
                _b.genres = _d.sent();
                _c = data[index];
                return [4 /*yield*/, video.price];
            case 7:
                _c.price = _d.sent();
                return [4 /*yield*/, fs_1.default.writeFileSync(dir + "/videos.json", JSON.stringify(data, null, 2))];
            case 8:
                _d.sent();
                return [4 /*yield*/, video];
            case 9: return [2 /*return*/, _d.sent()];
        }
    });
}); };
exports.updateVideoRentUp = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var index;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data.findIndex(function (v) { return v.uid === id; })];
            case 1:
                index = _a.sent();
                if (!(index < 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, false];
            case 2: return [2 /*return*/, _a.sent()];
            case 3: return [4 /*yield*/, data[index].forRent++];
            case 4:
                _a.sent();
                return [4 /*yield*/, fs_1.default.writeFileSync(dir + "/videos.json", JSON.stringify(data, null, 2))];
            case 5:
                _a.sent();
                return [4 /*yield*/, true];
            case 6: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.updateVideoRentDown = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var index;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data.findIndex(function (v) { return v.uid === id; })];
            case 1:
                index = _a.sent();
                if (!(index < 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, false];
            case 2: return [2 /*return*/, _a.sent()];
            case 3: return [4 /*yield*/, data[index].forRent];
            case 4:
                _a.sent();
                return [4 /*yield*/, fs_1.default.writeFileSync(dir + "/videos.json", JSON.stringify(data, null, 2))];
            case 5:
                _a.sent();
                return [4 /*yield*/, true];
            case 6: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.deleteVideo = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var index, video;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data.findIndex(function (v) { return v.uid === id; })];
            case 1:
                index = _a.sent();
                if (!(index < 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, null];
            case 2: return [2 /*return*/, _a.sent()];
            case 3: return [4 /*yield*/, data[index]];
            case 4:
                video = _a.sent();
                return [4 /*yield*/, data.splice(index, 1)];
            case 5:
                _a.sent();
                return [4 /*yield*/, fs_1.default.writeFileSync(dir + "/videos.json", JSON.stringify(data, null, 2))];
            case 6:
                _a.sent();
                return [4 /*yield*/, video];
            case 7: return [2 /*return*/, _a.sent()];
        }
    });
}); };
