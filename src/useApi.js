import { useEffect, useState } from 'react'
import axios from 'axios'

const identity = (result) => result

const useApi = (url, mapResults = identity) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    let isCurrentRequest = true

    setIsLoading(true)
    setError(undefined)

    axios
      .get(url)
      .then((response) => {
        if (isCurrentRequest) {
          setData(mapResults(response.data))
        }
      })
      .catch((requestError) => {
        if (isCurrentRequest) {
          setError(requestError)
        }
      })
      .finally(() => {
        if (isCurrentRequest) {
          setIsLoading(false)
        }
      })

    return () => {
      isCurrentRequest = false
    }
  }, [url, mapResults])

  return { data, isLoading, error }
}

export { useApi }
