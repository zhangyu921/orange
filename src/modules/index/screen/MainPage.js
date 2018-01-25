import React, { Component } from 'react'
import {
  ScrollView
  // View,
  // Text
} from 'react-native'
import { Accordion, List, Button } from 'antd-mobile'

class MainPage extends Component {
  componentWillMount () {
  }

  render () {
    return (
      <ScrollView>
        <Accordion defaultActiveKey='0' onChange={this.onChange}>
          <Accordion.Panel header='Title 1'>
            <List className='my-list'>
              <List.Item>content 1</List.Item>
              <List.Item>content 2</List.Item>
              <List.Item>content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header='Title 2'>this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header='Title 3'>
            text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion>
        <Button onClick={() => {
          this.props.navigation.navigate('Login')
        }}>123123</Button>
      </ScrollView>
    )
  }
}

export default MainPage
