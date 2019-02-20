import React, {Component} from "react";
import {
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles/Button";
import defaultTheme from "./themes/eternity"

export default class Button extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  getButton = (animation) => {
    switch (animation) {
      case "Opacity":
      default:
        return TouchableOpacity;
      case "Constant":
        return TouchableWithoutFeedback;
      case "Highlight":
        return TouchableHighlight;
      case "Ripple":
        return Platform.select({
          ios: TouchableOpacity,
          android: TouchableNativeFeedback,
        });
    }
  }

  render() {
    const {children, type, style, horizontal, active, primary, disabled, ...restProps} = this.props;
    const theme = this.context.theme || defaultTheme;
    const mixedStyle = StyleSheet.flatten([
      styles(theme).base,
      horizontal && styles(theme).base_horizontal,
      primary && styles(theme).base_primary,
      disabled && styles(theme).base_disabled,
      style,
    ]);
    const mixedIconStyle = StyleSheet.flatten([
      styles(theme).icon,
      active && styles(theme).icon_active,
    ]);
    this.Button = this.getButton(type);

    // 使用 TouchableNativeFeedback 组件时的样式设置
    const background = type === 'Ripple' ? {
      background: TouchableNativeFeedback.SelectableBackgroundBorderless()
    } : {};
    // 非 Ripple 类型时，样式直接作用于 Button，内部包裹了一层 View，导致 flex 属性不生效，需要单独配置
    const {flex} = mixedStyle;
    return (
      <this.Button
        style={{flex: flex}}
        {...background}
        {...restProps}
      >
        <View style={mixedStyle}>
          {
            // 在父元素中为子元素 Icon 添加图标样式，Icon 元素显示设置 inherit（bool） 属性时，样式才能生效
            React.Children.map(children, (element) => {
              if (element.type && element.props.inherit) {
                return React.cloneElement(element, {
                  style: StyleSheet.flatten([mixedIconStyle, element.props.style])
                });
              }
              return element;
            })
          }
        </View>
      </this.Button>
    );
  }
}