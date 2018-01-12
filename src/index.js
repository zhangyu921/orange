import React, { Component } from 'react'
import { TabNavigator, StackNavigator } from './mirrorn'
import codePush from 'react-native-code-push'
import {
    Button,
    Text,
    SafeAreaView
} from 'react-native'
import Screen from './components/Screen'

let codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL}

const ScreenG = text =>
    class TextScreen extends Component {
      render () {
        return (
          <Screen>
            <Text>{text}</Text>
          </Screen>
        )
      }
    }

const StackScreenG = (text, nav) => ({navigation}) => (
  <Screen>
    <Text>{text}</Text>
    <Button
      title={nav}
      onPress={() => {
        navigation.navigate(nav, {name: 'Lucy'})
      }}
        />
    <Button
      title='Back'
      onPress={() => {
        navigation.goBack()
      }}
        />
  </Screen>
)

const Stack1 = StackNavigator({
  stackScreen1: {screen: StackScreenG('Go Next 2', 'stackScreen2')},
  stackScreen2: {screen: StackScreenG('Go Next 3', 'stackScreen3')},
  stackScreen3: {screen: StackScreenG('Go Next 1', 'stackScreen1')}
})
Stack1.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarVisible: false
}

const Tab1 = TabNavigator(
  {
    Screen1: {
      screen: ScreenG('哈哈哈哈没没没')
    },
    Screen2: {
      screen: Stack1
    },
    Screen3: {
      screen: ScreenG('噼噼啪啪比比妈妈')
    }
  },
  {
    tabBarPosition: 'bottom'
  }
)

// class MyApp extends Component {
//   onButtonPress () {
//     codePush.sync({
//       updateDialog: true,
//       installMode: codePush.InstallMode.IMMEDIATE
//     })
//   }

//   render () {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <TouchableOpacity
//           style={{justifyContent: 'center', alignItems: 'center'}}
//           onPress={this.onButtonPress}
//                 >
//           <Text>Check for updates！</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

export default codePush(codePushOptions)(() => (
  <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
    <Tab1 />
  </SafeAreaView>
))
