import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { ChakraProvider } from '@chakra-ui/react'
import { StateContextProvider } from '@/context'

export default function App({ Component, pageProps }) {
  
  return (
  <div>
    <ChakraProvider>
      <StateContextProvider>
    <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  </StateContextProvider>
  </ChakraProvider>
  </div>
  )
}
