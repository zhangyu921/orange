import React, { Component } from 'react'
import {
  ScrollView,
} from 'react-native'
import { InputItem, Button, WhiteSpace } from 'antd-mobile'
// import PropTypes from 'prop-types'
import { NavigationActions } from 'react-navigation'
import axios from 'axios'
import { JSEncrypt } from 'jsencrypt'

import { KEY_RSA_PUB } from '../../../configs/cipher'

const encrypt = new JSEncrypt()
encrypt.setPublicKey(KEY_RSA_PUB)

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'Main'})],
})

class PasswordLogin extends Component {

  constructor (props) {
    super(props)
    this.state = {
      account: '',
      password: ''
    }
  }

  _onChangeValue = key => value => {
    this.setState({
      [key]: value
    })
  }

  _onSubmit = () => {
    const {account, password} = this.state
    console.log(this.state.account, this.state.password)
    // if (!account || !password) { return }
    let params = {
      account: account.trim(),
      password: password.trim(),
      date: new Date(),
      random: Math.random(5)
    }
    console.log(params)
    let encryptedLoginData = encrypt.encrypt(JSON.stringify(params))
    console.log(encryptedLoginData)

    axios.post(
      'http://localhost:8088/api/v1/login',
      {payload: encryptedLoginData}
    )
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    this.props.navigation.dispatch(resetAction)
  }

  render () {
    return (
      <ScrollView>
        <WhiteSpace size={'xl'}/>

        <InputItem
          clear
          placeholder='请输入邮箱'
          value={this.state.account}
          onChange={this._onChangeValue('account')}
        >邮箱</InputItem>

        <InputItem
          clear
          type={'password'}
          placeholder='请输入密码'
          value={this.state.password}
          onChange={this._onChangeValue('password')}
        >密码</InputItem>

        <WhiteSpace size={'xl'}/>

        <Button
          onClick={this._onSubmit}
        >
          {'登录'}
        </Button>

      </ScrollView>
    )
  }
}

export default PasswordLogin
