import React, {Component} from "react";
import {View} from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles/Header";
import {styleWrapper} from "../utiles/toolbox";
import defaultTheme from "./themes/eternity"

export default class Header extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  render() {
    const {children, style, left, right, ...restProps} = this.props;
    const theme = this.context.theme || defaultTheme;
    return (
      <View style={[styles(theme).base, style]} {...restProps}>
        <View style={styles(theme).left}>
          {styleWrapper(left, styles(theme).item)}
        </View>
        <View style={styles(theme).middle}>
          {children}
        </View>
        <View style={styles(theme).right}>
          {styleWrapper(right, styles(theme).item)}
        </View>
      </View>
    );
  }
}