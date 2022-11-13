import { 
    MatrixClient,
    SimpleFsStorageProvider,
    AutojoinRoomsMixin,
    RichReply
} from "matrix-bot-sdk";

//We connect to our homeserver and add the chatbot access token
const homeserverUrl = "https://matrix-client.matrix.org";
const accessToken = "syt_YWlsZW50ZXN0aW5n_LWkbxdepBHhYwUFkKpbK_4MjItq";

//Create a storage file and set autojoin to any room the bot is invited
const storage = new SimpleFsStorageProvider("bot-storage.json");
const client = new MatrixClient(homeserverUrl, accessToken, storage);
AutojoinRoomsMixin.setupOnClient(client);

// Before we start the bot, register our command handler
client.on("room.message", handleCommand);

// Now that everything is set up, start the bot. This will start the sync loop and run until killed.
client.start().then(() => console.log("Bot started!"));

// This is the command handler we registered before
async function handleCommand(roomId: string, event: any) {
    // Don't handle unhelpful events (ones that aren't text messages, are redacted, or sent by the bot himself)
    if (event['content']?.['msgtype'] !== 'm.text') return;
    if (event['sender'] === await client.getUserId()) return;
    
// Possibility, if wanted you can start the bot with a specific word, in this case is `hola polky`
// const body = event['content']['body'];
// if (!body?.startsWith("Hola polky")) return;<
// And the reply:
//    const replyBody = "Hola, ¿sobre qué quierés aprender hoy?";
//    const reply = RichReply.createFor(roomId, event, replyBody, replyBody);
//    reply["msgtype"] = "m.notice";
//    client.sendMessage(roomId, reply);

// Instead we are using a more simple method, you can start Polky with any word (always as text)
    await client.replyNotice(roomId, event, "¡Hola! Mi nombre es Polky y estoy para responder todas tus dudas ¿Cómo puedo ayudarte?");
}


