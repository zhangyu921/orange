import React, { Component } from 'react'
import {
  ScrollView,
  View,
  // Text,
  Image,
  TouchableOpacity
} from 'react-native'
import { Carousel, Button, WhiteSpace, Grid, NoticeBar } from 'antd-mobile'

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}))

class MainPage extends Component {

  static navigationOptions = {
    title: '主页'
  }

  constructor (props) {
    super(props)
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0,
    }
  }

  componentWillMount () {
  }

  render () {
    return (
      <ScrollView stickyHeaderIndices={[0]}>
        <NoticeBar
          mode="link"
          onClick={() => alert('1')}
          marqueeProps={{loop: true}}
        >
          {'Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.'}
        </NoticeBar>

        <Carousel
          autoplay={true}
          infinite
          selectedIndex={0}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          <TouchableOpacity
            style={{flex: 1, height: this.state.imgHeight}}
          >
            <Image
              source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}}
              style={{height: '100%', width: '100%'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, height: this.state.imgHeight}}
          >
            <Image
              source={{uri: 'https://introvertspring.com/wp-content/uploads/2014/08/85430649.jpg'}}
              style={{height: '100%', width: '100%'}}
            />
          </TouchableOpacity>
        </Carousel>

        <View style={{backgroundColor: 'white'}}>
          <Grid
            data={data}
          />
        </View>

        <WhiteSpace/>

        <Button onClick={() => {
          this.props.navigation.navigate('MainPage2')
        }}>123123</Button>

      </ScrollView>
    )
  }
}

export default MainPage
