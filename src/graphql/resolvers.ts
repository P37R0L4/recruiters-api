// import { fileLoader, mergeTypes } from "graphql-tools/merge";
import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

type Config = Parameters<typeof mergeResolvers>[1];

const typesArray = loadFilesSync(
  path.join(__dirname, "modules", "**", "resolvers.ts")
);

export const mergeResolversArray = (
  types: any[],
  options?: { resolversDefinition?: boolean; all?: boolean } & Partial<Config>
) =>
  mergeResolvers(types, {
    ...options,
  });

export default mergeResolversArray(typesArray);
