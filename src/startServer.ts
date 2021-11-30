import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
require("dotenv").config();

export function startServer(typeDefs: any, resolvers: any) {
  mongoose.connect(process.env.MONGODB_URI),
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => console.log(`🔥 Server started! at ${url}`));
}
