import React, {Component} from "react";
import {ScrollView} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles/Content";
import defaultTheme from "./themes/eternity"

export default class Content extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  render() {
    const {children, style, contentContainerStyle, ...restProps} = this.props;
    const theme = this.context.theme || defaultTheme;
    return (
      <ScrollView
        contentContainerStyle={[styles(theme).base, style, contentContainerStyle]}
        {...restProps}
      >
        {children}
      </ScrollView>
    );
  }
}