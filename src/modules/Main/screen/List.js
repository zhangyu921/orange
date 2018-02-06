import React, { Component } from 'react'
import TabView from 'react-native-scrollable-tab-view'
import {
  View,
  Text,
  ScrollView,
  FlatList,
  LayoutAnimation,
  UIManager,
  PanResponder,
  Animated,
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
    this.AnimValue = new Animated.Value(0)
    this.heightResult = 0

    this.state = {
      scrollEnabled: true,
      scrollViewHeight: 0,
      iconPanelHeight: 100,
      scrollAnimatedValue: this.AnimValue.interpolate({
        inputRange: [0, 40],
        outputRange: [100, 0]
      }),
      refreshing: false
    }
  }

  componentWillMount () {
    UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true)
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.d{x,y} will be set to zero now
        console.log('onPanResponderGrant')
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        console.log(
          'onPanResponderMove',
          gestureState.dy
        )
        let {dy} = gestureState
        if (dy < 7 && dy > -7) {return}
        this.heightResult = Math.min(Math.max(this.state.iconPanelHeight + dy, 0), 50)

        console.log(this.refs['header'])
        this.refs['header'].setNativeProps({
          height: this.heightResult
        })

      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        console.log('onPanResponderRelease')
        this.setState({
          iconPanelHeight: this.heightResult
        })
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        console.log('onPanResponderTerminate')
        this.refs['header'].setNativeProps({
          height: this.state.iconPanelHeight
        })

      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true
      },
    })
  }

  componentDidMount () {
    // setTimeout(() => {this.setState({scrollEnabled: false})}, 5000)
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  render () {
    return (
      <View
        style={{flex: 1}}
        onLayout={event => {
          console.log(event.nativeEvent.layout.height)
          this.setState({
            scrollViewHeight: event.nativeEvent.layout.height
          })
        }}
      >
        <Animated.View
          style={{
            flex: 1,
          }}
        >
          <Animated.View style={{
            height: this.state.scrollAnimatedValue,
            overflow: 'hidden',
            zIndex: -1,
            backgroundColor: 'teal',
          }}>
          </Animated.View>
          <TabView style={{
            height: this.state.scrollViewHeight,
            backgroundColor: 'white'
          }}>
            <FlatList
              tabLabel='red'
              style={{flex: 1}}
              data={fakeData}
              renderItem={({item}) => <ListItem title={item.title}/>}
              onEndReached={() => { this.setState({scrollEnabled: true}) }}
              onEndReachedThreshold={0.1}
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({refreshing: true})
                setTimeout(() => {this.setState({refreshing: false})}, 2000)
              }}

              // onScroll={event => {
              //   console.log(event.nativeEvent.contentOffset.y)
              //   let {y} = event.nativeEvent.contentOffset
              //   if (y > 105) {
              //     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
              //     this.setState({iconPanelHeight: 0})
              //   }
              //   if (y < 1) {
              //     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
              //     this.setState({iconPanelHeight: 100})
              //   }
              // }}

              onScroll={
                Animated.event(
                  // scrollX = e.nativeEvent.contentOffset.x
                  [{
                    nativeEvent: {
                      contentOffset: {
                        y: this.AnimValue
                      }
                    }
                  }]
                )
              }
            />
            <Cube color={'green'} tabLabel='green'/>
            <Cube color={'yellow'} tabLabel='yellow'/>
          </TabView>

        </Animated.View>

      </View>

    )
  }
}

class Header extends Component {
  render () {
    const {title, height} = this.props
    return (
      <View style={{height: height}}>
        <Text>{title}</Text>
      </View>
    )
  }
}

function ListItem ({title}) {
  return (
    <View style={{height: 200}}>
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
