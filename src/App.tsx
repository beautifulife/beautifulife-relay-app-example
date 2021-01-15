import 'react-toastify/dist/ReactToastify.css'

import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { RelayEnvironmentProvider } from 'relay-hooks'

import { createEnvironment } from './graphql'
import { RelayQueryCacheContext } from './packages/relayQueryCache'
import { relayQueryCache } from './relayQueryCache'
import Router from './Router'

const App: React.FC = () => {
  const [environment] = useState(createEnvironment())

  useEffect(() => {
    relayQueryCache.setEnvironment(environment)
  }, [])

  return (
    <RelayEnvironmentProvider environment={environment}>
      <RelayQueryCacheContext.Provider value={relayQueryCache}>
        <Router />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
      </RelayQueryCacheContext.Provider>
    </RelayEnvironmentProvider>
  )
}

export default App
