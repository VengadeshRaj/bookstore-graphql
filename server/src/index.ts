
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {typeDefBooks} from './schema.js'

async function startApolloServer(){
    const server = new ApolloServer({typeDefs:typeDefBooks});
    const {url} = await startStandaloneServer(server);
    console.log(`success ${url}`)
};

startApolloServer();