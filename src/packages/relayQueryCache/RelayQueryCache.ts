import { createOperationDescriptor, Environment, getRequest, GraphQLTaggedNode } from 'relay-runtime'

import { CacheStorage } from './CacheStorage'

interface CacheOptions {
  size?: number
  ttl?: number
}

export class RelayQueryCache {
  private cacheStorage: CacheStorage
  private environment: Environment | undefined

  constructor({ size, ttl }: CacheOptions) {
    this.cacheStorage = new CacheStorage(size || 20, ttl || 15 * 60 * 1000) // 15min
  }

  public setEnvironment(environment: Environment) {
    this.environment = environment
  }

  public retainQuery(query: GraphQLTaggedNode, variables: Record<string, unknown> = {}) {
    if (!this.environment) return

    const request = getRequest(query)
    const operation = createOperationDescriptor(request, variables)
    const disposable = this.environment.retain(operation)

    const cacheStorageKey = (query as any).default.hash + JSON.stringify(variables)

    return this.cacheStorage.enque(cacheStorageKey, disposable)
  }
}
