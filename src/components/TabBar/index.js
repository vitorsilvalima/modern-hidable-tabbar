import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { createAnimatableComponent } from 'react-native-animatable'
import { SafeAreaView } from 'react-navigation'
import styles from './styles'
import { Icon } from 'expo';

const AnimatedSafeAreaView = createAnimatableComponent(SafeAreaView)

const MiddleButtom = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.middleButton}
  >
    <Icon.Ionicons
      name="ios-add"
      size={26}
      color="white"
    />
  </TouchableOpacity>
)

class TabBar extends Component {
  renderIcon = ({ route, focused }) => {
    const { onTabPress, renderIcon } = this.props

    return (
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => onTabPress({ route })}
        key={route.key}
      >
        {renderIcon({ route, focused })}
      </TouchableOpacity>
    )
  }

  render () {
    const {
      navigation,
      visible,
    } = this.props

    const { routes } = navigation.state
    const length = Math.ceil(routes.length / 2)
    const leftRoutes = routes.slice(0, length)
    const rightRoutes = routes.slice(length)

    const animationType = visible ? 'fadeInUp' : 'fadeOutDown'

    return (
      <AnimatedSafeAreaView
        animation={animationType}
        duration={400}
        forceInset={{ bottom: 'always', top: 'never' }}
        style={styles.tabBar}
        useNativeDriver
      >
        <View style={styles.routesWrapper}>
          {
            leftRoutes.map((route, index) => {
              const focused = index === navigation.state.index
              const scene = { route, focused }

              return this.renderIcon(scene)
            })
          }
        </View>

        <MiddleButtom onPress={this.props.onMiddleButtonPress} />

        <View style={styles.routesWrapper}>
          {
            rightRoutes.map((route, index) => {
              const focused = (index + length) === navigation.state.index
              const scene = { route, focused }

              return this.renderIcon(scene)
            })
          }
        </View>
      </AnimatedSafeAreaView>)
  }
}

export default TabBar
