import React, { Component } from 'react'
import TabView from 'react-native-scrollable-tab-view'
import {
  View,
  Text,
  ScrollView,
  FlatList
} from 'react-native'

const fakeData = [
  {title: '少时诵诗书'},
  {title: '少时诵诗书'},
  {title: '少时诵诗书'},
  {title: '少时诵诗书'},
  {title: '少时诵诗书'},
  {title: '少时诵诗书'},
  {title: '少时诵诗书'}
]

class List extends Component {
  constructor (p) {
    super(p)
    this.state = {
      scrollEnabled: true,
      scrollViewHeight: 0
    }
  }

  componentDidMount () {
    // setTimeout(() => {this.setState({scrollEnabled: false})}, 5000)
  }

  _contentViewScroll = (e: Object) => {
    console.log('_contentViewScroll', e.nativeEvent)
    let offsetY = e.nativeEvent.contentOffset.y // 滑动距离
    let contentSizeHeight = e.nativeEvent.contentSize.height // scrollView contentSize高度
    let oriageScrollHeight = e.nativeEvent.layoutMeasurement.height // scrollView高度
    if (offsetY + oriageScrollHeight >= contentSizeHeight - 10) {
      console.log('上传滑动到底部事件')
      this.setState({scrollEnabled: false})
    }
  }

  render () {
    return (
      <ScrollView
        style={{flex: 1}}
        stickyHeaderIndices={[1]}
        scrollEnabled={this.state.scrollEnabled}
        onLayout={(event) => {
          console.log(event.nativeEvent)
          this.setState({scrollViewHeight: event.nativeEvent.layout.height})
        }}
        onMomentumScrollEnd={this._contentViewScroll}
      >
        <Header title={'少时诵诗书'} />

        <TabView style={{height: this.state.scrollViewHeight}}>
          <FlatList
            tabLabel='red'
            style={{transform: [{scaleY: -1}]}}
            data={fakeData}
            renderItem={({item}) => <ListItem title={item.title} />}
            onEndReached={() => { this.setState({scrollEnabled: true}) }}
            onEndReachedThreshold={0.1}
          />
          <Cube color={'green'} tabLabel='green' />
          <Cube color={'yellow'} tabLabel='yellow' />
        </TabView>
      </ScrollView>

    )
  }
}

function Header ({title}) {
  return (
    <View style={{height: 50}}>
      <Text>{title}</Text>
    </View>
  )
}

function ListItem ({title}) {
  return (
    <View style={{height: 200, transform: [{scaleY: -1}]}}>
      <Text>{title}</Text>
    </View>
  )
}

function Cube ({content, color}) {
  return (
    <View style={{height: 500, backgroundColor: color}}>
      <Text>{content}</Text>
    </View>
  )
}

List.propTypes = {}

export default List
