import React from 'react'
import codePush from 'react-native-code-push'
import AppRoute from './AppRoute'

const codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL}

export default codePush(codePushOptions)(() => <AppRoute />)
