import React, {Component} from "react";
import {Animated, View} from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles/Modal";
import Button from "./Button";
import Text from "./Text";
import defaultTheme from "./themes/eternity"

export default class Modal extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      heightProgress: new Animated.Value(0),
    };
  }

  // 外部显示调用展示模型框，动画持续时长默认 300 ms
  show = (duration = 300) => {
    this.setState({visible: true});
    // 高度值必须存在，默认高度 200
    const height = this.props.height || 200;
    this.state.heightProgress.setValue(0);
    Animated.timing(this.state.heightProgress, {
      toValue: height,
      duration: duration
    }).start(this.props.onShow && this.props.onShow());
  }

  // 外部显示调用关闭模型框，动画持续时长默认 300 ms
  close = (duration = 300) => {
    Animated.timing(this.state.heightProgress, {
      toValue: 0,
      duration: duration
    }).start(() => {
      this.setState({visible: false});
      this.props.onClose && this.props.onClose();
    });
  }

  render() {
    const {children, closeText = '取消', withClose = false, maskStyle} = this.props;
    const theme = this.context.theme || defaultTheme;
    return this.state.visible ? (
      <View style={styles(theme).base}>
        <Button
          style={[styles(theme).mask, maskStyle]}
          onPress={() => this.close()}
        />
        <Animated.View
          style={[styles(theme).content, {height: this.state.heightProgress}]}
        >
          {children}
          {withClose && (
            <Button
              style={styles(theme).close}
              onPress={() => this.close()}
            >
              <Text p3>{closeText}</Text>
            </Button>
          )}
        </Animated.View>
      </View>
    ) : null;
  }
}
