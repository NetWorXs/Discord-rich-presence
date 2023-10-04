const rpc = require("discord-rpc");

const clientId = 'Client-Id';

const client = new rpc.Client({
    transport: 'ipc'
})

client.on('ready', () => {

    console.log("[RPC] Hooked!");
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "'Details'",
            assets: {
                large_image: "'Image name'",
                large_text: "'Image text'"
            },
//Add Buttons            
            buttons: [
                {
                    label: "'Name'",
                    url: "'URL'"
                },
                {
                    label: "'Name'",
                    url: "'URL'"
                }
            ]
        }
//terminal output
    }).then(() => console.log("[RPC] Activity set!")).catch(console.error);

});


client.login({ clientId }).catch(console.error);