import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
// components --------- ↓
import Footer from '../../components/footer/footer';
// components --------- ↑

import { AtTabs, AtTabsPane } from 'taro-ui';
import './my.scss';
class My extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
    };
  }
  config = {
    navigationBarTitleText: 'my',
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleClick(value) {
    this.setState({
      current: value,
    });
  }
  handleClick(current) {
    // if (current === 0) {
    //   // 跳转到目的页面，在当前页面打开
    //   Taro.redirectTo({
    //     url: '/pages/page/path/name',
    //   });
    // } else if (current === 1) {
    //   Taro.redirectTo({
    //     url: '/pages/page/path/name',
    //   });
    // } else if (current === 2) {
    //   Taro.redirectTo({
    //     url: '/pages/page/path/name',
    //   });
    // } else if (current === 3) {
    //   Taro.redirectTo({
    //     url: '/pages/page/path/name',
    //   });
    // }
    this.setState({ current });
  }
  render() {
    const { current } = this.state;

    return (
      <View className="index">
        my 1221331321
        <Footer current={2} />
      </View>
    );
  }
}

export default My;
