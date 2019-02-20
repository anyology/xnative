import React, {Component} from "react";
import {TextInput, View} from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles/Searcher";
import Icon from "./Icon";
import defaultTheme from "./themes/eternity"

export default class Searcher extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  render() {
    const {children, left, right, style, ...restProps} = this.props;
    const theme = this.context.theme || defaultTheme;
    return (
      <View style={[styles(theme).base, style]}>
        {left ? {left} : <Icon style={styles(theme).icon} name="magnify" />}
        <TextInput
          style={styles(theme).input}
          placeholder="搜索"
          autoFocus={false}
          multiline={false}
          underlineColorAndroid="transparent"
          placeholderTextColor={theme.searcherIconColor}
          {...restProps}
        >
          {children}
        </TextInput>
        {right}
      </View>
    );
  }
}
