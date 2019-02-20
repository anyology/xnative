import {StyleSheet} from 'react-native';

export default theme => StyleSheet.create({
  base: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: theme.footerHeight,
    backgroundColor: theme.footerBgColor,
  },
});
