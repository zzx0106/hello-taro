import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import routers from '@routers';
import './footer.scss';
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      tabList: [{ title: '首页', iconType: 'home', text: 'new' }, { title: '学习', iconType: 'folder', text: '100', max: '99' }, { title: '我的', iconType: 'user' }],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(current) {
    console.log('current1', current);
    if (current === 0) {
      // 跳转到目的页面，在当前页面打开
      Taro.redirectTo({
        url: '/pages/index/index',
      });
    } else if (current === 1) {
      Taro.redirectTo({
        url: '/pages/learn/learn',
      });
    } else if (current === 2) {
      Taro.redirectTo({
        url: '/pages/my/my',
      });
    }
    this.setState({ current });
  }
  componentDidMount() {
    const { path } = this.$router;

    const current = routers.indexOf(path) > -1 ? routers.indexOf(path) : 0;
    this.setState({
      current,
    });
    console.log('mounted', this.$router);
  }
  render() {
    const { tabList } = this.state;
    const { current } = this.props;
    return <AtTabBar iconSize={18} fontSize={11} className="footer-box" fixed tabList={tabList} onClick={this.handleClick} current={current} />;
  }
}

export default Footer;
