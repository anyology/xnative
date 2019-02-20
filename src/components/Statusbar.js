/**
 * Statusbar Component
 * react-native 提供的 StatusBar 组件针对 iOS 和 Android 平台支持的功能不同，
 * 基于当前提供的功能，很难实现一致的效果，本组件的封装统一了针对两个平台的功能属性。
 *
 * 封装后的状态条组件，删除了 translucent。重新实现了 backgroundColor，组件直接放在页面中即可生效。
 * hidden，barStyle，animated 属性仍具有全局性，组件直接放在页面中其生效取决于导航：
 * 对于 SwitchNavigator、Stack navigator、Drawer navigator 可以直接生效；
 * 对于 TabNavigator 首次生效，后续对 Tab 的切换，状态条的这些属性不再渲染，
 * 如果需要可以设置一个监听器，通过 Tab 的 didFocus 状态来更改状态条的这些属性，注意确保删除该监听器。
 **
 */

import React, {Component} from "react";
import {Platform, StyleSheet, StatusBar, View} from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles/Statusbar";
import defaultTheme from "./themes/eternity"


export default class Statusbar extends Component {
  // ES7 语法中的静态属性定义，ES6 的 class 中只有静态方法，没有静态属性，
  // 此种方式定义后，外部使用该组件时能够自动提示属性
  static propTypes = {
    hidden: PropTypes.bool,
    barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
    backgroundColor: PropTypes.string,
    animated: PropTypes.bool,
  };

  // ES7 语法中的静态属性默认值设置方式
  static defaultProps = {
    hidden: false,
    barStyle: 'default',
    animated: false,
  };

  static contextTypes = {
    theme: PropTypes.object
  };

  render() {
    const {hidden, barStyle, backgroundColor, animated, ...restProps} = this.props;
    const theme = this.context.theme || defaultTheme;
    // 默认背景色设置为 theme.statusbarBgColor
    const thisBgColor = backgroundColor || theme.statusbarBgColor;
    // 状态条隐藏时清除占位组件 View 相关的样式，避免占位
    const mixedStyle = !hidden
      ? StyleSheet.flatten([styles(theme).base, {backgroundColor: thisBgColor}]) : undefined;
    return (
      <View style={mixedStyle}>
        <StatusBar
          hidden={hidden}
          barStyle={barStyle}
          backgroundColor={Platform.select({
            ios: undefined,
            android: "transparent",
          })}
          animated={animated}
          {...restProps}
          // 固定使用沉浸式，同时设置 View 实现 Statusbar 样式及占位
          translucent
        />
      </View>
    );
  }
}
