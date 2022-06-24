import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

import { MyTrainingsTrainerParamList, ScreenNames } from '../../../common'
import { useHttpRequest } from '../../../hooks'

import { GetTrainingLearners } from '../../../api/training/training'
import { PublicAppUserDto } from '../../../api/user/interfaces'
import { Id } from '../../../api/user/types'

import LearnerList from './components/LearnerList'
import Title from '../../../components/Title/Title'

type RouteParams = RouteProp<MyTrainingsTrainerParamList, ScreenNames.MyTrainingsTrainerTraining>

const TrainerTrainingScreen: React.FC = (): React.ReactElement => {
  const route = useRoute<RouteParams>()
  const { trainingId } = route.params

  const [getTrainingLearners] = useHttpRequest(GetTrainingLearners)

  const [learnerList, setLearnerList] = useState<PublicAppUserDto[]>([])

  const getLearners = async (trainingId: Id) => {
    const response = await getTrainingLearners({ trainingId })
    response && setLearnerList(response)
  }

  useEffect(() => {
    getLearners(trainingId)
  }, [])

  return (
    <ScrollView>
      <Title>Learners of training {trainingId}</Title>
      <View style={styles.listContainer}>
        <LearnerList learners={learnerList} />
      </View>
    </ScrollView>
  )
}

export default TrainerTrainingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
