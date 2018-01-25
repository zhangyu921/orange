import { StackNavigator, TabNavigator } from 'react-navigation'
import { route as loginRoute } from './modules/login'
import { route as indexRoute } from './modules/index'

const MainTabNav = TabNavigator({
  Index: {screen: indexRoute},
  Settings: {screen: indexRoute}
}, {
  tabBarPosition: 'bottom',
  headerLeft: null
})

export default StackNavigator({
  Login: {screen: loginRoute},
  Main: {screen: MainTabNav}
}, {
  headerMode: 'screen'
})
