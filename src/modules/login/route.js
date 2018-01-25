import { StackNavigator } from 'react-navigation'

import PasswordLogin from './screen/PasswordLogin'

const route = StackNavigator({
  PasswordLogin: {screen: PasswordLogin}
}, {
  headerMode: 'none'
})

export default route
