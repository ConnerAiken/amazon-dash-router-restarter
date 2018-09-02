import dashBtn from "node-dash-button";
import utils from "./utils";
import say from "say";
import telnet from "telnet-client";

let dash;

utils.loadENV();
dash = dashBtn([process.env.dashMac], null, null, 'all'); 
say.speak("The dash router switch service has started.", 'Alex', 0.5);


dash.on("detected", function (){
    say.speak("A dash button click has been detected!", 'Alex', 0.5); 
    let connection = new telnet();
   
    let params = {
      host: process.env.routerIp,
      port: process.env.routerTelnetPort || 23,
      shellPrompt: '/ # ',
      timeout: 1500
    };
   
    connection.connect(params)
    .then(connection.exec('reboot'))
    .then(res => { 
        console.log('result:', res)
        say.speak("That's it. I've sent the request.", 'Alex', 0.5); 
    });
      
});