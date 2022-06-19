import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { darkTheme } from '../../../common'

const NoData: React.FC = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seems like there is no data</Text>
    </View>
  )
}

export default NoData

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: darkTheme.textMain,
  },
})
