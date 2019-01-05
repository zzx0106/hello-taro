import Taro, { Component } from '@tarojs/taro';
import {
  View,
  RadioGroup,
  Radio,
  Audio,
  Image,
  Map,
  Label,
  PickerView,
  PickerViewColumn,
  Button,
  Camera,
  Text,
  ScrollView,
  Swiper,
  SwiperItem,
  MovableArea,
  MovableView,
  Picker,
  Progress,
  RichText,
  Input,
} from '@tarojs/components';
import './recommend.scss';
class Recommend extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const years = [];
    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i);
    }
    this.state = {
      years: years,
      current: 0,
      selector: ['美国', '中国', '巴西', '日本'],
      selectorChecked: '美国',
      timeSel: '12:01',
      dateSel: '2018-04-22',
      value: [9999, 1, 1],
      isInit: false,
      data: [],
      nodes: [
        {
          name: 'div',
          attrs: {
            class: 'div_class',
            style: 'line-height: 60px; color: red;',
          },
          children: [
            {
              type: 'text',
              text: 'Hello World!12313132',
            },
          ],
        },
      ],
    };
    this.onScrolltoupper = this.onScrolltoupper.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount() {
    console.log('Taro.ENV_TYPE', Taro.ENV_TYPE);
    console.log('Taro.ENV_TYPE', Taro.getEnv());

    this.setState({
      isInit: true,
    });
    setTimeout(() => {
      this.setState({
        data: [
          {
            img: require('../../assets/images/shop_bg44@2x.png'),
          },
          {
            img: require('../../assets/images/shop_bg44@2x.png'),
          },
          {
            img: require('../../assets/images/shop_bg44@2x.png'),
          },
          {
            img: require('../../assets/images/shop_bg44@2x.png'),
          },
        ],
      });
    }, 60);
  }
  onScrolltoupper() {
    console.log('onScrolltoupper');
  }
  onScroll() {
    console.log('onScroll');
  }
  render() {
    const { isInit } = this.state;
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
        {this.state.data}
        <Swiper className="test-h" indicatorColor="#999" indicatorActiveColor="#333" circular indicatorDots autoplay>
          {this.state.data.map((item, index) => {
            return (
              <SwiperItem key={index}>
                <View style="width: 100%;height: 100px;background: #fff;">123123</View>
                {/* <Image
                  style="width: 100%;height: 100px;background: #fff;"
                  src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
                /> */}
              </SwiperItem>
            );
          })}
        </Swiper>
        <Progress percent={50} strokeWidth={2} active activeColor="blue" />
        <RichText nodes={this.state.nodes} />
        <Input type="text" placeholder="将会获取焦点" focus />
        <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
          <View className="picker">当前选择：{this.state.selectorChecked}</View>
        </Picker>
        <PickerView indicatorStyle="height: 50px;" style="width: 100%; height: 300px;" value={this.state.value} onChange={this.onChange}>
          <PickerViewColumn>
            {this.state.years.map((item) => {
              return <View>{item}年</View>;
            })}
          </PickerViewColumn>
        </PickerView>
        <RadioGroup>
          <Label className="radio-list__label" for={0} key={0}>
            <Radio className="radio-list__radio" value={'中国'} checked={true}>
              中国
            </Radio>
          </Label>
          <Label className="radio-list__label" for={1} key={1}>
            <Radio className="radio-list__radio" value={'中国'} checked={false}>
              中国
            </Radio>
          </Label>
        </RadioGroup>
        <Audio
          src="http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"
          controls={true}
          autoplay={false}
          loop={false}
          muted={true}
          initialTime="30"
          id="video"
        />
        <Camera />
        <Map />
      </ScrollView>
    );
  }
}

export default Recommend;
