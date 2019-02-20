import {StyleSheet} from 'react-native';

export default theme => StyleSheet.create({
  base: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  mask: {
    backgroundColor: theme.modalMaskBgColor,
    marginBottom: -10,
  },
  content: {
    backgroundColor: theme.modalBgColor,
    justifyContent: 'space-between',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  close: {
    flex: 0,
    height: 50,
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
  },
});
