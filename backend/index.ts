import { 
    MatrixClient,
    SimpleFsStorageProvider,
    AutojoinRoomsMixin,
    RichReply
} from "matrix-bot-sdk";

// import { pregunta, respuesta }  from './pregunta.js';

//We connect to our homeserver and add the chatbot access token
const homeserverUrl = "https://matrix-client.matrix.org";
const accessToken = "syt_cG9sa3lib3Q_PsxvDteaTllkcmkUHAcO_4KdDXR";

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
    await client.replyNotice(roomId, event, "¡Hola! Mi nombre es Polky y estoy para responder todas tus dudas ¿Cómo puedo ayudarte?");

        // Código de prueba que no funciona aún:
        // const body = event['content']['body'];
        //  if (!body?.startsWith("como creo una billetera?")) return;
        //  const replyBody = '1- Ir a polkadot.js.org/apps 2- Accounts / cuentas polkadot-js extensión3- Añadir al navegador4- Nos queda la extensión en la barra del navegador 5- Hacer click / continuar / add account +6- Aparece la dirección de la billetera y las 12 palabras (que debes anotar en un papel y guardar en un lugar seguro, ¡MUY IMPORTANTE!)';
        //  const reply = RichReply.createFor(roomId, event, replyBody, replyBody);
        //  reply["msgtype"] = "m.notice";
        //  client.sendMessage(roomId, reply);
        
}
