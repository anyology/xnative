import React, {Children, Component} from "react";
import PropTypes from 'prop-types';
import eternity from "./themes/eternity";

export default class Theme extends Component {
  static childContextTypes = {
    theme: PropTypes.object,
  };

  getChildContext() {
    const theme = this.props.value;
    return {
      theme: theme ? {...eternity, ...theme} : eternity,
    };
  }

  render() {
    const {children} = this.props;
    // 只返回一个 children，此处不能直接使用 return children;
    return Children.only(children);
  }
}