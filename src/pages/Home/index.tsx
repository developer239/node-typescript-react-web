import React, { useEffect } from 'react'
import useFetcher from 'src/hooks/useFetcher'
import welcomeModuleApi from 'src/modules/welcomeModule/api'
import { ISetData } from 'src/hooks/useFetcher/types'

const HomePage = () => {
  const [loadData, resource] = useFetcher()

  const requestSecuredResource = () => loadData(async (setData: ISetData) => {
    const response = await welcomeModuleApi.securedResource()
    setData(response.data)
  })

  useEffect(() => {
    requestSecuredResource()
  }, [])

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        {resource.loading
        ? 'loading...'
        : `Message from backend: ${resource.data.message}`}
      </p>
    </div>
  )
}

export default HomePage
