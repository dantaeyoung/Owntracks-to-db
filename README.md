# owntracks to db

Super simple - an express server to receive locations from OwnTracks and log them in mongodb. No need for MQTT!

This was originally created to work with [instagay](https://github.com/dantaeyoung/instagay).

### Setup

- Install MongoDB: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
- `npm install -d`
- Copy `app/config/config.js.example` to `app/config/config.js` and fill in information according to the MongoDB installation.
- `npm start`

### Deployment

Use with PM2.

- `npm install pm2 -g`
- `pm2 startup` then run the code that results
- `pm2 start app/app.js --name owntracks_to_db`
- `pm2 save`
