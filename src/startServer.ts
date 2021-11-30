import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

require('dotenv').config();

export default function startServer(typeDefs: any, resolvers: any) {
  mongoose.connect(process.env.MONGODB_URI), { useNewUrlParser: true };

  mongoose.connection.once('open', () => {
    console.log('MongoDB Connected');
  });

  mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection error: ', err);
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => console.log(`🔥 Server started! at ${url}`));
}
