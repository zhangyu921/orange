import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
} from 'react-native'
import { Button } from 'antd-mobile'

class Example extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Button onPress={() => {
          this.props.navigation.navigate('PasswordLogin')
        }}/>
      </View>
    )
  }
}

Example.propTypes = {}

export default Example
