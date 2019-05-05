import { authorizedApiClient } from 'services/api/client'

export const securedResource = () => authorizedApiClient.get('secured')

export default {
  securedResource,
}
