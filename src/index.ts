import { startServer } from "./startServer";
import resolvers from "./graphql/resolvers";
import typedefs from "./graphql/typeDefs";

startServer(typedefs, resolvers);
