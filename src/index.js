import React from 'react'
import codePush from 'react-native-code-push'
import AppRoute from './AppRoute'
// import List from './modules/index/screen/List'

const codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL}

export default codePush(codePushOptions)(() => <AppRoute/>)
// export default () => <AppRoute/>
