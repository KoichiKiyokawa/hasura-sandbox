import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const client = new ApolloClient({
	uri: 'http://localhost:8080/v1/graphql',
	cache: new InMemoryCache()
});

export default client;
