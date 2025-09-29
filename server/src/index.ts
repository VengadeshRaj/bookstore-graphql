import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefBooks } from "./schema.js";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

const mocks = {
  Query: () => ({
    bookStore: () => [...new Array(6)],
  }),
  Book: () => ({
    id: () => "book_01",
    name: () => "Race of my life",
    author: () => {
      return {
        id: "author_01",
        name: "milkha singh",
      };
    },
    description: () => "Milkha singh's life story",
  }),
};

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs: typeDefBooks }),
      mocks,
    }),
  });
  const { url } = await startStandaloneServer(server);
  console.log(`success ${url}`);
}

startApolloServer();
