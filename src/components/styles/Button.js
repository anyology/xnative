import {StyleSheet} from 'react-native';

export default theme => StyleSheet.create({
  base: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.buttonBgColor,
  },
  base_horizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  base_primary: {
    flex: 0,
    backgroundColor: theme.buttonPrimaryBgColor,
    paddingVertical: 10,
    borderRadius: 5,
  },
  base_disabled: {
    flex: 0,
    backgroundColor: theme.buttonDisabledBgColor,
    paddingVertical: 10,
    borderRadius: 5,
  },
  icon: {
    color: theme.buttonIconColor,
    fontSize: theme.buttonIconSize,
    marginHorizontal: 5,
  },
  icon_active: {
    color: theme.buttonActiveIconColor,
    marginHorizontal: 5,
  }
});