import { unstable_createResource as createResource } from 'react-cache'
import * as authorizedApi from '../api'

const welcome = createResource(authorizedApi.securedResource)

export const requestSecuredResource = (key?: string) =>
  welcome.read(key ?? 'welcome')
