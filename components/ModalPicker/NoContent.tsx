import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NoContent: React.FC = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No data found</Text>
    </View>
  )
}

export default NoContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
})
