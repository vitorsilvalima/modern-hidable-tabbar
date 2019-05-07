import React from 'react'

const { Consumer, Provider: TabBarProvider } = React.createContext({
  visible: true,
  isTabBarVisible: () => null,
  onMiddleButtonPress: () => null,
})


const withTabBarState = Component => props => <Consumer>
  {
    (tabBarState) => <Component {...props} {...tabBarState} />
  }
</Consumer>


export {
  TabBarProvider,
  withTabBarState,
}

