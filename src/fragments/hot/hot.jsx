import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text,ScrollView } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { add, minus, asyncAdd } from '../../store/actions/counter';
import './hot.scss';
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
class Hot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    this.onScrolltoupper = this.onScrolltoupper.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }
  onScrolltoupper() {
    console.log('onScrolltoupper');
  }
  onScroll() {
    console.log('onScroll');
  }
  render() {
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
        <View className="fragment">这是热点</View>
        <Button className="add_btn" onClick={this.props.add}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.props.dec}>
          -
        </Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>
          async
        </Button>
        <View>
          <Text>{this.props.counter.num}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Hot;
