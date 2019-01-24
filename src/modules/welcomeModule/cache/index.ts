import { unstable_createResource as createResource } from 'react-cache'
import welcomeModuleApi from '../api'

const welcome = createResource(welcomeModuleApi.securedResource)

export const requestSecuredResource = (key?: string) =>
  welcome.read(key || 'welcome')
