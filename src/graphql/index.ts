import {
  // errorMiddleware,
  // loggerMiddleware,
  // perfMiddleware,
  // retryMiddleware,
  RelayNetworkLayer,
  urlMiddleware,
} from 'react-relay-network-modern/es'
import { Environment, RecordSource, Store } from 'relay-runtime'

const source = new RecordSource()
const store = new Store(source)
let environment: Environment

function createNetwork() {
  return new RelayNetworkLayer([
    urlMiddleware({
      url: () => Promise.resolve(`http://${window.location.hostname}:4000/graphql`),
    }),
    // errorMiddleware(),
    // perfMiddleware(),
    // retryMiddleware({
    //   fetchTimeout: 5000,
    //   retryDelays: (attempt) => Math.pow(2, attempt + 4) * 100, // or simple array [3200, 6400, 12800, 25600, 51200, 102400, 204800],
    //   beforeRetry: ({ abort, delay, attempt, lastError: _, req: __ }) => {
    //     if (attempt > 7) abort()
    //     console.log(`retry will be called after ${delay}`)
    //   },
    //   statusCodes: (statusCode) => {
    //     switch (statusCode) {
    //       case 200:
    //       case 400:
    //       case 401:
    //       case 404:
    //       case 500:
    //         return false
    //       default:
    //         return true
    //     }
    //   },
    // }),
    // example of the custom inline middleware
    // (next) => async (req) => {
    //   // req.fetchOpts.credentials = 'same-origin' // allow to send cookies (sending credentials to same domains)
    //   // req.fetchOpts.credentials = 'include'; // allow to send cookies for CORS (sending credentials to other domains)

    //   const res = await next(req)
    //   return res
    // },
  ])
}

export function createEnvironment() {
  if (environment) return environment

  environment = new Environment({
    network: createNetwork(),
    store,
  })

  return environment
}
