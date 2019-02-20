/**
 * React native component library entry.
 * https://github.com/everygogo/xnative.git
 *
 * @format
 * @flow
 *
 */

'use strict';

module.exports = {
  // Components
  get Button() {
    return require('./src/components/Button').default;
  },
  get Container() {
    return require('./src/components/Container').default;
  },
  get Content() {
    return require('./src/components/Content').default;
  },
  get Footer() {
    return require('./src/components/Footer').default;
  },
  get Header() {
    return require('./src/components/Header').default;
  },
  get Icon() {
    return require('./src/components/Icon').default;
  },
  get Modal() {
    return require('./src/components/Modal').default;
  },
  get Refresher() {
    return require('./src/components/Refresher').default;
  },
  get Searcher() {
    return require('./src/components/Searcher').default;
  },
  get Splash() {
    return require('./src/components/Splash').default;
  },
  get Statusbar() {
    return require('./src/components/Statusbar').default;
  },
  get Text() {
    return require('./src/components/Text').default;
  },
  get Theme() {
    return require('./src/components/Theme').default;
  },
  // Utiles
  get toolbox() {
    return require('./src/utiles/toolbox');
  },
  get colors() {
    return require('./src/utiles/colors');
  },
  // APIs
  get Toast() {
    console.warn(require('./src/apis/Toast').default);

    return require('./src/apis/Toast').default;
  }
}