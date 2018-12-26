# owntracks to db

Super simple - an express server to receive locations from OwnTracks and log them in mongodb. No need for MQTT!

### Repo Installation

- `npm install -d`
- `npm start`

Use with PM2.

- `npm install pm2 -g`
- `pm2 startup` then run the code that results
- `pm2 start app/app.js`
- `pm2 save`
