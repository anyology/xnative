import {StyleSheet} from 'react-native';

export default theme => StyleSheet.create({
  base: {
    flex: 0,
    height: theme.statusbarHeight,
    backgroundColor: theme.statusbarBgColor,
    alignSelf: "flex-start"
  },
});
