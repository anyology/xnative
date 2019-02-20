import {StyleSheet} from 'react-native';

export default theme => StyleSheet.create({
  base: {
    flex: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: theme.headerHeight,
    backgroundColor: theme.headerBgColor,
    paddingHorizontal: 10
  },
  left: {
    flex: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  right: {
    flex: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  item: {
    flex: 0,
  },
});
