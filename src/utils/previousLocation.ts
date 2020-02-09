import * as R from 'ramda'
import { RouteComponentProps } from 'react-router-dom'

export const previousLocation = (props: RouteComponentProps): string =>
  R.path(['location', 'state', 'from', 'pathname'], props) ?? '/'
