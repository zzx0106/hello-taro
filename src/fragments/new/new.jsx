import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text, ScrollView } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { add, minus, asyncAdd } from '../../store/actions/counter';
import './new.scss';
@connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    },
  })
)
class New extends Component {
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
        <View className="fragment">这是新闻</View>
        <Button className="add_btn" onClick={this.props.add}>
          +
        </Button>
      </ScrollView>
    );
  }
}

export default New;
