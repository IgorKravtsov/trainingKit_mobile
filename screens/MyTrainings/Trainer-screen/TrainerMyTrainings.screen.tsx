import React, { useEffect, useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { Id } from '../../../api/user/types'
import { GetTrainerTrainings } from '../../../api/user/user'
import { useAuthContext } from '../../../components/AuthProvider/AuthProvider'
import { useHttpRequest } from '../../../hooks'
import { useAppSelector } from '../../../redux/hooks'
import { selectMyTrainings, setMyTrainerTrainings } from '../../../redux/slices/myTrainings.slice'
import NoData from '../components/NoData'
import TrainingListItem from './components/TrainingListItem'

const TrainerMyTrainingsScreen: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { myTrainerTrainings } = useAppSelector(selectMyTrainings)

  const [getTrainingLearners] = useHttpRequest(GetTrainerTrainings, { action: setMyTrainerTrainings })

  const [refreshing, setRefreshing] = useState(false)

  const getServerTrainings = async (trainerId: Id) => {
    await getTrainingLearners({ trainerId })
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    getServerTrainings(user?.id || 0)
    setRefreshing(false)
  }, [])

  useEffect(() => {
    getServerTrainings(user?.id || 0)
  }, [])

  React.useEffect(() => {
    console.log('===myTrainerTrainings===', myTrainerTrainings)
  }, [myTrainerTrainings])

  return (
    <ScrollView contentContainerStyle={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      {myTrainerTrainings.length === 0 ? (
        <NoData />
      ) : (
        <>
          <FlatList data={myTrainerTrainings} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <TrainingListItem item={item} />} />
        </>
      )}
    </ScrollView>
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
