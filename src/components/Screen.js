import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

export default class Screen extends Component {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
