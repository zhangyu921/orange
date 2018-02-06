import React, { Component } from 'react'
import {
  ScrollView,
  // View,
  Text

} from 'react-native'
import { Accordion, List, Button } from 'antd-mobile'
import { NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'PasswordLogin'})],
})

const resetToLogin = NavigationActions.navigate({
  routeName: 'PasswordLogin',
  action: resetAction
})

class MainPage extends Component {

  static navigationOptions = {
    title: '设置'
  }

  componentWillMount () {
  }

  render () {
    return (
      <ScrollView style={{backgroundColor: 'teal'}}>
        <Text>{'设置页面'}</Text>
        <Button onClick={() => {
          this.props.navigation.dispatch(resetAction)
        }}>登出</Button>
      </ScrollView>
    )
  }
}

export default MainPage
