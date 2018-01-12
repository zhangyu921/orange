import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

export default class Screen extends Component {
  render () {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
    // justifyContent: 'center',
    // paddingTop: Platform.OS === 'ios' ? 20 : 0
    // alignItems: 'center'
  }
})
