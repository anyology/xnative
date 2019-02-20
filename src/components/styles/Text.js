import {StyleSheet} from 'react-native';

export default theme => StyleSheet.create({
  base: {
    color: theme.textColor,
    fontSize: undefined,
    fontWeight: undefined,
  },
  base_1: {
    fontSize: theme.h1FontSize,
    marginVertical: 10,
  },
  base_2: {
    fontSize: theme.h2FontSize,
    marginVertical: 8,
  },
  base_3: {
    fontSize: theme.h3FontSize,
    marginVertical: 6,
  },
  base_4: {
    fontSize: theme.h4FontSize,
    marginVertical: 3,
  },
  base_5: {
    fontSize: theme.h5FontSize,
    marginVertical: 2,
  },
  base_6: {
    fontSize: theme.h6FontSize,
    marginVertical: 1,
  },
});
