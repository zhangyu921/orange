import { StackNavigator } from 'react-navigation'

import MainPage from './screen/MainPage'

export default StackNavigator(
  {
    MainPage: {
      screen: MainPage,
      navigationOptions: {
        headerLeft: null
      }

    },
    MainPage2: {screen: MainPage}
  },
  {
    headerMode: 'none'
  }
)
