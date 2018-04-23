## Node script to email the ip of rasberry pi
---
### Steps
- Setup crontab with the following
  - @reboot sudo /home/pi/.nvm/versions/node/v8.9.4/bin/node /home/pi/code/rfid/check-ip.js &
- reboot pi
