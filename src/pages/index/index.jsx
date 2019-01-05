import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';

import './index.scss';
// components --------- ↓
import Footer from '../../components/footer/footer';
// components --------- ↑

// fragments --------- ↓
import Recommend from '../../fragments/recommend/recommend';
import Hot from '../../fragments/hot/hot';
import New from '../../fragments/new/new';
import Rank from '../../fragments/rank/rank';
// fragments --------- ↑

import { AtTabs, AtTabsPane } from 'taro-ui';

class Index extends Component {
  constructor() {
    super(...arguments);
    this.tabList = [{ title: '推荐' }, { title: '热点' }, { title: '新闻' }, { title: '排行' }];
    this.state = {
      current: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  config = {
    navigationBarTitleText: '首页',
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleClick(current) {
    this.setState({
      current,
    });
  }
  render() {
    const { current } = this.state;

    return (
      <View className="index">
        <AtTabs current={current} tabList={this.tabList} onClick={this.handleClick}>
          <AtTabsPane current={current} index={0}>
            <Recommend />
          </AtTabsPane>
          <AtTabsPane current={current} index={1}>
            <Hot />
          </AtTabsPane>
          <AtTabsPane current={current} index={2}>
            <New />
          </AtTabsPane>
          <AtTabsPane current={current} index={3}>
            <Rank />
          </AtTabsPane>
        </AtTabs>
        <Footer current={0} />
      </View>
    );
  }
}

export default Index;
