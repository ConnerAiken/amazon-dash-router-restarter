# Dash Router Switch
## Dash button powered router restart

I have Centurylink. Centurylink gave me a modem. This modem is garbage. It overheats regularly then restricts external internet access. LAN access remains.

Until I convince CenturyLink to come check it out, I wrote this nodejs script that uses the `node-dash-button` library to detect dash button clicks. Once it detects a dash
button click, it Telnets into my router/modem and restarts it. This runs as a docker container on my desktop 24/7.

### Prereqs.

1) NodeJS 8+
2) NPM
3) Python2 or Python3 or `npm install --global --production windows-build-tools` from an elevated terminal.
4) Libpcap-dev library

### First Time Dash Setup

Follow Amazon's instructions to configure your button to send messages when you push them but not actually order anything. When you get a Dash button, Amazon gives you a list of setup instructions to get going. Just follow this list of instructions, but don’t complete the final step (#3 I think) Do not select a product, just exit the app.

### Find a Dash

To find a dash on your network, run the following from the node-dash-button directory in node_modules:

# you may need to use sudo due to libpcap running in permiscuous mode
$ cd node_modules/node-dash-button
$ node bin/findbutton

### Setting up the Dash with this service

You have a couple options.. this script reads from a process.env variable called `dashEnv`. Ex: `process.env.dashEnv`.

1) Use a .env file: 

    There is logic in place to automatically read key/value pairs from a .env file in the root of the project. After finding the mac address, copy the .env.default file and and name it ".env". Place the mac address in the corresponding key/value pair.

2) Set the env variable in your OS.

    If on windows, set a user or system enviormental variable named `dashEnv`. If on unix, `set dashMac=x,y,z` or place it in profile/bashrc.

3) Hard code it and let my env processing work be all for nothing.
 
### Service usage

1) If you are not using docker, install get the libpcap-dev library. If you are on debian/ubuntu: `sudo apt-get install libpcap-dev` 
2) `git clone <this_url> && cd <repo_name>` 
3) `npm install`
4) Next, get the mac address of the dash button using your router/nmap or use `node node_modules/node-dash-button/bin/findbutton`.
5) `npm start`