import {StyleSheet} from 'react-native';

export default theme => StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.searcherBgColor,
    height: theme.searcherHeight,
    borderRadius: theme.searcherBorderRadius,
  },
  icon: {
    color: theme.searcherIconColor,
    fontSize: theme.searcherIconSize,
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    marginVertical: 0,
    color: theme.searcherColor,
  }
});
