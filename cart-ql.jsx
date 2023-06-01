import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

// GraphQL client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const PRODUCTS_QUERY = gql`
  query {
    products {
      data {
        id
        attributes {
          name
          cost
          instock
          country
        }
      }
    }
  }
`;

const Products = (props) => {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  // Rest of code

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  let items = data.products.data.map((product) => product.attributes);

  // Rest of code
};

// Wrapping the App in the ApolloProvider component and pass in the client
ReactDOM.render(
  <ApolloProvider client={client}>
    <Products />
  </ApolloProvider>,
  document.getElementById("root")
);
