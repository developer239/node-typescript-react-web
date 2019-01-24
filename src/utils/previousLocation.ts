import { path } from 'ramda'

const previousLocation = (props: any) =>
  path(['location', 'state', 'from', 'pathname'], props) || '/'

export default previousLocation
