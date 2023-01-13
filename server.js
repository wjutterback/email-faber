const express = require('express');
const app = express();
const PORT = 4000;
const db = require('./config/connection');

const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const http = require('http');
const cors = require('cors');
const { json } = require('body-parser');
const { typeDefs, resolvers } = require('./schema');

const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

const startApolloServer = async () => {
    await server.start();
    app.use(
        '/graphql',
        cors(),
        json(),
        expressMiddleware(server, {
          context: async ({ req }) => ({ token: req.headers.token }),
        }),
    );
    db.once('open', () => {
    httpServer.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(
          `Use GraphQL at http://localhost:${PORT}/graphql`
        );
      });
    });
}

startApolloServer()