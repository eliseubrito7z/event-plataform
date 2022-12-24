import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { client } from './lib/apollo'
import { defaultTheme } from './styles/themes/defaultTheme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ChakraProvider theme={defaultTheme}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </ChakraProvider>
  )
}
