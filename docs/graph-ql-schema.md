# What is Graph Ql schema:
A schema is like a contract between the server and the client.It defines what a GraphQL API can and can't do, and how clients can request or change data. It's an abstraction layer that provides flexibility to consumers while hiding backend implementation details.

## what is SDL:
GraphQL's schema definition language (SDL). The syntax for writing GraphQL schemas. All GraphQL APIs can use SDL to represent their schema, regardless of the API's programming language.

## Sample Schema:
 `type SpaceCat {
    name: String!
    age: Int,
    missions: [Mission]
    }`