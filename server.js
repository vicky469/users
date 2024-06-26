const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');


const app = express();

app.use('/graphql', expressGraphQL({ // wire up middleware to express server 
    schema,
    graphiql: true
    }));

app.listen(4000, () => {
    console.log('Server is running on port 4000');
    });