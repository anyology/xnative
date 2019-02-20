import React, {Component} from "react";
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import PropTypes from 'prop-types';
import styles from "./styles/Icon";
import defaultTheme from "./themes/eternity"
import {StyleSheet} from "react-native";

export default class Icon extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  getIconSet = (iconType) => {
    switch (iconType) {
      case "AntDesign":
        return AntDesign;
      case "Entypo":
        return Entypo;
      case "EvilIcons":
        return EvilIcons;
      case "Feather":
        return Feather;
      case "FontAwesome":
        return FontAwesome;
      case "Foundation":
        return Foundation;
      case "Ionicons":
        return Ionicons;
      case "MaterialCommunityIcons":
        return MaterialCommunityIcons;
      case "MaterialIcons":
        return MaterialIcons;
      case "Octicons":
        return Octicons;
      case "SimpleLineIcons":
        return SimpleLineIcons;
      case "Zocial":
        return Zocial;
      default:
        return Ionicons;
    }
  }

  render() {
    const {type, style, color, size, h1, h2, h3, h4, h5, h6, p1, p2, p3, p4, p5, p6, ...restProps} = this.props;
    const theme = this.context.theme || defaultTheme;
    const thisType = type || (style && style.fontFamily) || (theme && theme.iconFontFamily);
    const colorStyle = color ? {color: color} : {};
    const sizeStyle = size ? {fontSize: size} : {};
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
      style, colorStyle, sizeStyle
    ]);
    this.Icon = this.getIconSet(thisType);
    return <this.Icon style={[styles(theme).base, mixedStyle]} {...restProps} />;
  }
}
