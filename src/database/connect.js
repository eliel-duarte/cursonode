const mongoose = require("mongoose");

const connectToDatabase =  async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.gvpk5pa.mongodb.net/database?retryWrites=true&w=majority`,
        (error) => {
        if (error) {
            return console.log('Erro ao conectar ao banco de dados', error);
        }

        return console.log('Conexão feita com sucesso');
    });
};

module.exports = connectToDatabase;