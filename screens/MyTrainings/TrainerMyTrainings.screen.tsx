import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TrainerMyTrainingsScreen: React.FC = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Trainer -&gt; MyTrainingsScreen!</Text>
    </View>
  )
}

export default TrainerMyTrainingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
})
