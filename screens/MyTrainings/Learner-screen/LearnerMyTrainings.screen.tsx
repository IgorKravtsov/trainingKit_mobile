import React, { useCallback, useEffect, useState } from 'react'
import { RefreshControl, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native'

import { GetUserTrainings, MarkVisitingTraining } from '../../../api/training/training'
import { Id } from '../../../api/user/types'
import { useAuthContext } from '../../../components/AuthProvider/AuthProvider'
import { useHttpRequest } from '../../../hooks'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { hideLoading, showLoading } from '../../../redux/slices/loading-indicator.slice'
import { selectMyTrainings, setMyLearnerTrainings } from '../../../redux/slices/myTrainings.slice'
import { transformMyTrainingsToSectionData } from '../../../util'
import NoData from '../components/NoData'
import LearnerTrainingListItem from './components/LearnerTrainingListItem'
import SectionTitle from './components/SectionTitle'

const LearnerMyTrainingsScreen: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { myLearnerTrainings } = useAppSelector(selectMyTrainings)

  const [getUserTrainings] = useHttpRequest(GetUserTrainings)
  const [markVisitingTraining] = useHttpRequest(MarkVisitingTraining)
  const dispatch = useAppDispatch()

  const [daysOffset, setDaysOffset] = useState(7)
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    getServerTrainings(user?.id || 0)
    setRefreshing(false)
  }, [])

  const getServerTrainings = async (learnerId: Id) => {
    const startDate = new Date()
    const endDate = new Date()
    endDate.setDate(startDate.getDate() + daysOffset)

    const response = await getUserTrainings({
      learnerId,
      startDate: startDate.toISOString().substring(0, 10),
      endDate: endDate.toISOString().substring(0, 10),
    })
    response && dispatch(setMyLearnerTrainings(response.trainings))
  }

  const markVisit = useCallback(
    async (learnerId: Id, trainingId: Id) => {
      const startDate = new Date()
      const endDate = new Date()
      endDate.setDate(startDate.getDate() + daysOffset)

      await markVisitingTraining({ userId: learnerId, trainingId })
      const response = await getUserTrainings({
        learnerId,
        startDate: startDate.toISOString().substring(0, 10),
        endDate: endDate.toISOString().substring(0, 10),
      })
      response && dispatch(setMyLearnerTrainings(response.trainings))
    },
    [user, markVisitingTraining, getUserTrainings]
  )

  useEffect(() => {
    getServerTrainings(user?.id || 0)
  }, [])

  return (
    <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      {myLearnerTrainings.length === 0 ? (
        <NoData />
      ) : (
        // <Text>NO DATA EPT</Text>
        <SectionList
          sections={transformMyTrainingsToSectionData(myLearnerTrainings)}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, section }) => <LearnerTrainingListItem item={item} gymImg={section.gym.img} onPress={markVisit} />}
          renderSectionHeader={({ section: { gym } }) => <SectionTitle>{gym.title}</SectionTitle>}
        />
      )}
    </ScrollView>
  )
}

export default LearnerMyTrainingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 24,
  },
})
