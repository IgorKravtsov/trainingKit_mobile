import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GetTrainingLearners } from '../../../api/training/training'
import { useHttpRequest } from '../../../hooks'

const TrainerMyTrainingsScreen: React.FC = (): React.ReactElement => {
  const [getTrainingLearners] = useHttpRequest(GetTrainingLearners)


  
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
