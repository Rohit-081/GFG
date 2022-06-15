const express =  require('express');
const {graphqlHTTP} =  require('express-graphql');
const schema = require('./schema.js')
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
var corsOptions = {
  origin: true,
  methods: ["POST"],
  credentials: true,
  maxAge: 3600
}

app.use(cors(corsOptions));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));