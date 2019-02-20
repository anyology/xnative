import React, {Component} from "react";
import {ImageBackground, StatusBar, Text, TouchableOpacity, View} from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles/Splash";
import defaultTheme from "./themes/eternity"

export default class Splash extends Component {
  static contextTypes = {
    theme: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    const {duration = 1, onPress} = this.props;
    let count = duration;
    this.setState({count: count});
    this.interval = setInterval(() => {
      count -= 1;
      this.setState({count: count});
      if (count <= 0) {
        onPress && onPress();
        clearInterval(this.interval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      source, style, showButton = true, buttonText,
      showStatusBar = false, onPress, ...restProps
    } = this.props;
    const theme = this.context.theme || defaultTheme;
    return (
      <View style={[styles(theme).base, style]} {...restProps}>
        <StatusBar hidden={!showStatusBar} />
        <ImageBackground source={source} style={styles(theme).image}>
          {showButton && (
            <TouchableOpacity style={styles(theme).button} onPress={onPress}>
              <Text style={styles(theme).text}>
                {`${this.state.count} ${buttonText}`}
              </Text>
            </TouchableOpacity>)
          }
        </ImageBackground>
      </View>
    );
  }
}
