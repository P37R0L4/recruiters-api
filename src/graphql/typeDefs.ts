// import { fileLoader, mergeTypes } from "graphql-tools/merge";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

type Config = Parameters<typeof mergeTypeDefs>[1];

const typesArray = loadFilesSync(
  path.join(__dirname, "modules", "**", "*.gql")
);
// const typeDefs = mergeTypes(typesArray);

export const mergeTypes = (
  types: any[],
  options?: { schemaDefinition?: boolean; all?: boolean } & Partial<Config>
) => {
  const schemaDefinition =
    options && typeof options.schemaDefinition === "boolean"
      ? options.schemaDefinition
      : true;

  return mergeTypeDefs(types, {
    useSchemaDefinition: schemaDefinition,
    forceSchemaDefinition: schemaDefinition,
    throwOnConflict: true,
    commentDescriptions: true,
    reverseDirectives: true,
    ...options,
  });
};

export default mergeTypes(typesArray);
