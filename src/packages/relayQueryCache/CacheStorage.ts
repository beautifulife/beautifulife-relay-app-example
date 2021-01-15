import { Disposable } from 'relay-runtime'

export class CacheStorage {
  private size: number
  private ttl: number
  private cache: Map<string, CacheDisposable>

  constructor(size: number, ttl: number) {
    this.size = size
    this.ttl = ttl
    this.cache = new Map()
  }

  private checkLimit() {
    return this.cache.size >= this.size
  }

  private clearIfExist(key: string) {
    const disPosable = this.cache.get(key)

    if (disPosable) {
      disPosable.dispose()
      this.cache.delete(key)
    }
  }

  private clearIfExpired() {
    this.cache.forEach((disposable, key) => {
      if (isExpired(disposable.fetchTime, this.ttl)) {
        disposable.dispose()
        this.cache.delete(key)
      }
    })
  }

  public enque(key: string, dispose: Disposable) {
    this.clearIfExist(key)
    this.clearIfExpired()

    if (this.checkLimit()) {
      this.deque()
    }

    const cacheDisposable = new CacheDisposable(dispose)
    this.cache.set(key, cacheDisposable)

    return cacheDisposable
  }

  public deque() {
    const firstItem = this.cache.entries().next()

    if (firstItem.done) return

    const [key, disPosable] = firstItem.value

    disPosable.dispose()
    this.cache.delete(key)
  }

  public clear() {
    this.cache.forEach((disposable) => {
      disposable.dispose()
    })

    this.cache = new Map()
  }
}

function isExpired(fetchTime: number, ttl: number): boolean {
  return fetchTime + ttl < Date.now()
}

class CacheDisposable {
  private isDisposed: boolean
  private _fetchTime: number
  private originalDisposable: Disposable

  constructor(originalDisposable: Disposable) {
    this.isDisposed = false
    this._fetchTime = Date.now()
    this.originalDisposable = originalDisposable
  }

  get fetchTime() {
    return this._fetchTime
  }

  private setDisposed() {
    this.isDisposed = true
  }

  public dispose() {
    if (this.isDisposed) return

    this.setDisposed()
    this.originalDisposable.dispose()
  }
}
