import { StackNavigator } from 'react-navigation'
import { route as MainRoute } from './modules/Main'
import { PasswordLogin } from './modules/login/screen'

import React from 'react'
import { View, Button } from 'react-native'

function Page ({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'violet'}}>
      <Button
        title={'Push Me'}
        onPress={() => {
          navigation.navigate('Func')
        }}
      />
    </View>
  )
}

export default StackNavigator({
  PasswordLogin: {
    screen: PasswordLogin,
    navigationOptions: {
      title: '登录',
      header: null,
    }
  },
  Main: {
    screen: MainRoute,
  },
  Func: {screen: Page}
}, {
  initialRouteName: 'PasswordLogin',
  headerMode: 'screen'
})
