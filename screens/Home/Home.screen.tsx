import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen: React.FC = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>HOME PAGE!</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
