import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LearnerMyTrainingsScreen: React.FC = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Learner -&gt; MyTrainingsScreen!</Text>
    </View>
  )
}

export default LearnerMyTrainingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
})
