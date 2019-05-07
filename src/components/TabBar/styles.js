import { StyleSheet } from 'react-native'
import { HEIGHT } from './contants'

export default StyleSheet.create({
  middleButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  iconWrapper: {
    padding: 15,
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    position: 'absolute',
    bottom: 0,
  },
  routesWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
})
