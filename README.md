# Step to deploy
Steps to Deploy App using docker

# Steps Overview:
**Step 1 - docker-compose build

**Step 1 - docker-compose up

https://www.npmjs.com/package/ccxt

**Step 2 - Save it in database**
- Use MySQL
https://www.npmjs.com/package/mysql

Database can be accessed with following credentials:
- Host - localhost/127.0.0.1 i.e runs on same machine
- Port - 3306
- Username - root
- Password - root
- Database - poc

- Query in *db.query* file must be executed first to create database table

- *timer.properties* file in project root holds delay for fetching data in ms, change it to change time to poll.

**API Endpoints**
- http://<host>:9000/api/api/exchange-info?name=bittrex
- http://<host>:9000/api/api/coin-price?pair=USDT-BTC
