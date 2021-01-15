import { createContext, useContext, useEffect } from 'react'
import { GraphQLTaggedNode } from 'relay-runtime'

import { RelayQueryCache } from './RelayQueryCache'

export const RelayQueryCacheContext = createContext<RelayQueryCache>({} as any)

export const useRelayQueryCache = () => useContext(RelayQueryCacheContext)

export const useRetainQuery = (query: GraphQLTaggedNode, variables?: Record<string, unknown>) => {
  const relayQueryCache = useRelayQueryCache()

  useEffect(() => {
    relayQueryCache.retainQuery(query, variables)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
