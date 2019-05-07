import React from 'react';
import ExpoConfigView from '../containers/ExpoConfigView';
import { withTabBarState } from '../state/tabBar'
class SettingsScreen extends React.Component {
  render() {
    return <ExpoConfigView
      isTabBarVisible={this.props.visible}
      setTabBarVisibility={this.props.setVisibility}
    />;
  }
}


export default withTabBarState(SettingsScreen)
