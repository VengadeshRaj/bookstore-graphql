import { gql, useQuery } from "@apollo/client";
import React, { use } from "react";

const FETCH_BOOKS = gql`
  query FetchBooks {
    bookStore {
      id
      name
      author {
        id
        name
      }
      description
    }
  }
`;

const BookStore = () => {
  const { loading, error, data } = useQuery(FETCH_BOOKS);
  return <div>{!loading ? <div></div> : <h1>loading...</h1>}</div>;
};

export default BookStore;
