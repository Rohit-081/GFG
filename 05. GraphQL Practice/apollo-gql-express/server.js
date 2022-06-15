const express = require('express');
const {ApolloServer, gql} =  require('apollo-server-express');
const { typeDefs} = require('./typeDefs');
const { resolvers } = require('./resolvers');
const mongoose = require('mongoose');


async function startServer() {
       const app = express();
       const apolloServer = new ApolloServer({
           typeDefs,
           resolvers,
       });     

       await apolloServer.start();

       apolloServer.applyMiddleware({ app: app});

       app.use((req,res) => {
           res.send("Hello from express apollo server")
       });

       await mongoose.connect('mongodb://localhost:27017/CgProductDB', {
           useUnifiedTopology: true,
           useNewUrlParser: true
       })

       console.log('Mongoose connected...');
       app.listen(4003, () => console.log("Server in running on port 4003"));

}
startServer();