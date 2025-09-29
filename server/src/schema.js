import gql from "graphql-tag";  
 
export const typeDefBooks = gql`
  type Query {
    bookStore: [Book!]!
  }
   
  type Book {
    id: ID!
    name: String!
    author: Author!
    description: String
  }
   
  type Author {
    id: ID!
    name: String!
  }
`;  