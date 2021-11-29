import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

export function startServer(typeDefs: any, resolvers: any) {
  mongoose.connect(
    "mongodb+srv://recruiters:portfolio@cluster0.s3koe.mongodb.net/users?retryWrites=true&w=majority"
  ),
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  server
    .listen()
    .then(({ url }) => console.log(`🔥 Server started! at ${url}`));
}
