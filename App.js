import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './exampleApp/navigation/AppNavigator';
import { TabBarProvider } from './exampleApp/state/tabBar'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isTabBarVisible: true,
  };

  setVisibility = (visible) => this.setState({
    isTabBarVisible: visible,
  })

  handleOnMiddleButtonPress = () => console.log("Button Pressed")

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <TabBarProvider value={{
          setVisibility: this.setVisibility,
          visible: this.state.isTabBarVisible,
          onMiddleButtonPress: this.handleOnMiddleButtonPress,
        }}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </TabBarProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
