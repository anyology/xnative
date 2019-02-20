import React from "react";
import {StyleSheet} from 'react-native';

export function styleWrapper(children, style) {
  return React.Children.map(children,
    (element, i) => React.cloneElement(element, {
      style: StyleSheet.flatten([style, element.props.style])
    }));
}

export function secondToTime(second) {
  if (second === 0) {
    return "00:00";
  }
  const absSecond = Math.abs(second);
  const sign = second < 0 ? "-" : "";
  let hour = Math.floor(absSecond / 3600);
  let minute = Math.floor((absSecond / 60) % 60);
  let remainder = Math.round(absSecond % 60);
  if (hour === 0) {
    hour = "";
  } else if (hour < 10) {
    hour = `0${hour}:`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (remainder < 10) {
    remainder = `0${remainder}`;
  }
  return `${sign}${hour}${minute}:${remainder}`;
}
