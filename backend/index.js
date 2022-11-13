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
exports.__esModule = true;
var matrix_bot_sdk_1 = require("matrix-bot-sdk");
// import { pregunta, respuesta }  from './pregunta.js';
//We connect to our homeserver and add the chatbot access token
var homeserverUrl = "https://matrix-client.matrix.org";
var accessToken = "syt_cG9sa3lib3Q_PsxvDteaTllkcmkUHAcO_4KdDXR";
console.log(homeserverUrl, accessToken);
//Create a storage file and set autojoin to any room the bot is invited
var storage = new matrix_bot_sdk_1.SimpleFsStorageProvider("bot-storage.json");
var client = new matrix_bot_sdk_1.MatrixClient(homeserverUrl, accessToken, storage);
matrix_bot_sdk_1.AutojoinRoomsMixin.setupOnClient(client);
// Before we start the bot, register our command handler
client.on("room.message", handleCommand);
// Now that everything is set up, start the bot. This will start the sync loop and run until killed.
client.start().then(function () { return console.log("Bot started!"); });
// This is the command handler we registered before
function handleCommand(roomId, event) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    // Don't handle unhelpful events (ones that aren't text messages, are redacted, or sent by the bot himself)
                    if (((_a = event['content']) === null || _a === void 0 ? void 0 : _a['msgtype']) !== 'm.text')
                        return [2 /*return*/];
                    _b = event['sender'];
                    return [4 /*yield*/, client.getUserId()];
                case 1:
                    if (_b === (_c.sent()))
                        return [2 /*return*/];
                    // const body = event['content']['body'];
                    //     if (!body?.startsWith("como creo una billetera?")) return;
                    //     const replyBody = '1- Ir a polkadot.js.org/apps 2- Accounts / cuentas polkadot-js extensión3- Añadir al navegador4- Nos queda la extensión en la barra del navegador 5- Hacer click / continuar / add account +6- Aparece la dirección de la billetera y las 12 palabras (que debes anotar en un papel y guardar en un lugar seguro, ¡MUY IMPORTANTE!)';
                    //     const reply = RichReply.createFor(roomId, event, replyBody, replyBody);
                    //     reply["msgtype"] = "m.notice";
                    //     client.sendMessage(roomId, reply);
                    // function contestarPregunta (pregunta: string, respuesta:string) {
                    //     const body = event['content']['body'];
                    //     if (!body?.startsWith(pregunta)) return;
                    //     const replyBody = respuesta;
                    //     const reply = RichReply.createFor(roomId, event, replyBody, replyBody);
                    //     reply["msgtype"] = "m.notice";
                    //     client.sendMessage(roomId, reply);
                    // }
                    // Possibility, if wanted you can start the bot with a specific word, in this case is `hola polky`
                    // const body = event['content']['body'];
                    // if (!body?.startsWith("Hola polky")) return;
                    // And the reply:
                    //    const replyBody = "Hola, ¿sobre qué quierés aprender hoy?";
                    //    const reply = RichReply.createFor(roomId, event, replyBody, replyBody);
                    //    reply["msgtype"] = "m.notice";
                    //    client.sendMessage(roomId, reply);
                    // Instead we are using a more simple method, you can start Polky with any word (always as text)
                    return [4 /*yield*/, client.replyNotice(roomId, event, "¡Hola! Mi nombre es Polky y estoy para responder todas tus dudas ¿Cómo puedo ayudarte?")];
                case 2:
                    // const body = event['content']['body'];
                    //     if (!body?.startsWith("como creo una billetera?")) return;
                    //     const replyBody = '1- Ir a polkadot.js.org/apps 2- Accounts / cuentas polkadot-js extensión3- Añadir al navegador4- Nos queda la extensión en la barra del navegador 5- Hacer click / continuar / add account +6- Aparece la dirección de la billetera y las 12 palabras (que debes anotar en un papel y guardar en un lugar seguro, ¡MUY IMPORTANTE!)';
                    //     const reply = RichReply.createFor(roomId, event, replyBody, replyBody);
                    //     reply["msgtype"] = "m.notice";
                    //     client.sendMessage(roomId, reply);
                    // function contestarPregunta (pregunta: string, respuesta:string) {
                    //     const body = event['content']['body'];
                    //     if (!body?.startsWith(pregunta)) return;
                    //     const replyBody = respuesta;
                    //     const reply = RichReply.createFor(roomId, event, replyBody, replyBody);
                    //     reply["msgtype"] = "m.notice";
                    //     client.sendMessage(roomId, reply);
                    // }
                    // Possibility, if wanted you can start the bot with a specific word, in this case is `hola polky`
                    // const body = event['content']['body'];
                    // if (!body?.startsWith("Hola polky")) return;
                    // And the reply:
                    //    const replyBody = "Hola, ¿sobre qué quierés aprender hoy?";
                    //    const reply = RichReply.createFor(roomId, event, replyBody, replyBody);
                    //    reply["msgtype"] = "m.notice";
                    //    client.sendMessage(roomId, reply);
                    // Instead we are using a more simple method, you can start Polky with any word (always as text)
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
