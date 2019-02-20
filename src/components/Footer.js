import React, {Component} from "react";
import {View} from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles/Footer";
import defaultTheme from "./themes/eternity"

export default class Footer extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  render() {
    const {children, style, ...restProps} = this.props;
    const theme = this.context.theme || defaultTheme;
    return (
      <View style={[styles(theme).base, style]} {...restProps}>
        {children}
      </View>
    );
  }
}