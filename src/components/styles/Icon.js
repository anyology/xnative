import {StyleSheet} from 'react-native';

export default theme => StyleSheet.create({
  base: {
    fontFamily: theme.iconFontFamily,
    fontSize: theme.iconFontSize,
    color: theme.iconColor,
  },
  base_1: {
    fontSize: theme.h1FontSize,
    margin: 10,
  },
  base_2: {
    fontSize: theme.h2FontSize,
    margin: 8,
  },
  base_3: {
    fontSize: theme.h3FontSize,
    margin: 6,
  },
  base_4: {
    fontSize: theme.h4FontSize,
    margin: 3,
  },
  base_5: {
    fontSize: theme.h5FontSize,
    margin: 2,
  },
  base_6: {
    fontSize: theme.h6FontSize,
    margin: 1,
  },
});
