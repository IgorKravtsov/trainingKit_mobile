import AnimatedLottieView from 'lottie-react-native'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const AppLoader: React.FC = (): React.ReactElement => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <AnimatedLottieView source={require('../../assets/app-loader.json')} autoPlay loop />
    </View>
  )
}

export default AppLoader

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1,
  },
})
