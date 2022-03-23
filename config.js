require('dotenv').config();

const config = {
    telegram: {
        id: process.env.TELEGRAM_APP_ID,
        hash: process.env.TELEGRAM_APP_HASH,
        phone: process.env.TELEGRAM_PHONE_NUMBER,
        storage: process.env.TELEGRAM_FILE,
        devServer: false,
        msgHistory: {
            maxMsg: 100,
            limit: 50,
        },
        getChat: {
            limit: 50
        },
    },
    dbfile: process.env.DB_FILE,
    chat_source_db: process.env.CHAR_SOURCE_FILE,
    chat_input_db: process.env.CHAR_INPUT_FILE,
    server: process.env.SERVER_URL
}

module.exports = config;