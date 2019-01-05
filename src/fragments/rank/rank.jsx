import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text, ScrollView } from '@tarojs/components';

import './rank.scss';
class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  render() {
    const { tabList, current } = this.state;
    return (
      <ScrollView
        className="scroll-box"
        scrollY
        scrollWithAnimation
        scrollTop="0"
        lowerThreshold="20"
        upperThreshold="20"
        onScrolltoupper={this.onScrolltoupper}
        onScroll={this.onScroll}
      >
        <View className="fragment">这是排行</View>
      </ScrollView>
    );
  }
}

export default Rank;
