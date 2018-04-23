const nodemailer = require('nodemailer');
const ip = require('ip');

let lookForIp = setInterval(function() {
    checkInternet(function(isConnected) {
        if (isConnected) {
            if(ip.address()) {
                let systemIp = ip.address();
                let transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: 'andyrasberrypi314@gmail.com',
                        pass: 'yB253PoV'
                    }
                });

                console.log('created');
                transporter.sendMail({
                    from: 'andyrasberrypi314@gmail.com',
                    to: 'asipple1@gmail.com',
                    subject: systemIp,
                    text: systemIp
                });
                stopLooking();
            }
        }
    });
}, 1000);

function stopLooking() {
    clearInterval(lookForIp);
}

function checkInternet(cb) {
    require('dns').lookup('google.com',function(err) {
        if (err && err.code == "ENOTFOUND") {
            cb(false);
        } else {
            cb(true);
        }
    })
}
// /home/pi/.nvm/versions/node/v8.9.4/bin/node
//  /home/pi/code/rfid/
