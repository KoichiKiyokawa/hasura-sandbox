import { AppProps } from "next/app"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { GRAPHQL_ENDPOINT } from "../env"

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
