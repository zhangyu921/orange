import { TabNavigator, TabBarBottom } from 'react-navigation'

import MainPage from './screen/MainPage'
import List from './screen/List'
import Setting from './screen/Setting'

const route = {
  Main: {
    screen: MainPage,
    navigationOptions: {
      headerLeft: null
    }
  },

  List: {
    screen: List,
    navigationOptions: {}
  },

  Setting: {
    screen: Setting,
    navigationOptions: {}
  },
}

export default TabNavigator(
  route,
  {
    tabBarComponent: TabBarBottom,
    initialRouteName: 'Main',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#0f90fe',
      inactiveTintColor: '#7e8084',
      showIcon: true,
      showLabel: true,
      labelStyle: {
        fontSize: 10,
        margin: 0,
        marginTop: 2,
      },
      iconStyle: {},
      style: {
        backgroundColor: '#fff',
        height: 50
      },
      indicatorStyle: {
        height: '100%',
        backgroundColor: '#e4e4e4'
      }
    },
  }
)