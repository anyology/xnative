import React, {Component} from "react";
import {StyleSheet, Text as NativeText} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles/Text";
import defaultTheme from "./themes/eternity"

export default class Text extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  render() {
    const {
      children, style, h1, h2, h3, h4, h5, h6,
      p1, p2, p3, p4, p5, p6, ...restProps
    } = this.props;
    const theme = this.context.theme || defaultTheme;
    const mixedStyle = StyleSheet.flatten([
      styles(theme).base,
      p1 && [styles(theme).base_1, {marginVertical: undefined}],
      p2 && [styles(theme).base_2, {marginVertical: undefined}],
      p3 && [styles(theme).base_3, {marginVertical: undefined}],
      p4 && [styles(theme).base_4, {marginVertical: undefined}],
      p5 && [styles(theme).base_5, {marginVertical: undefined}],
      p6 && [styles(theme).base_6, {marginVertical: undefined}],
      h1 && [styles(theme).base_1, {fontWeight: 'bold'}],
      h2 && [styles(theme).base_2, {fontWeight: 'bold'}],
      h3 && [styles(theme).base_3, {fontWeight: 'bold'}],
      h4 && [styles(theme).base_4, {fontWeight: 'bold'}],
      h5 && [styles(theme).base_5, {fontWeight: 'bold'}],
      h6 && [styles(theme).base_6, {fontWeight: 'bold'}],
      style
    ]);

    return (
      <NativeText style={mixedStyle} {...restProps}>
        {children}
      </NativeText>
    );
  }
}