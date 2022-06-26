import React, { useCallback, useEffect, useState } from 'react'
import { RefreshControl, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native'

import { GetUserTrainings } from '../../../api/training/training'
import { Id } from '../../../api/user/types'
import { useAuthContext } from '../../../components/AuthProvider/AuthProvider'
import { useHttpRequest } from '../../../hooks'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectMyTrainings, setMyLearnerTrainings } from '../../../redux/slices/myTrainings.slice'
import { transformMyTrainingsToSectionData } from '../../../util'
import NoData from '../components/NoData'
import LearnerTrainingListItem from './components/LearnerTrainingListItem'
import SectionTitle from './components/SectionTitle'

const LearnerMyTrainingsScreen: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { myLearnerTrainings } = useAppSelector(selectMyTrainings)

  const [getUserTrainings] = useHttpRequest(GetUserTrainings)
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
    console.log({ learnerId, startDate, endDate })

    const response = await getUserTrainings({
      learnerId,
      startDate: startDate.toISOString().substring(0, 10),
      endDate: endDate.toISOString().substring(0, 10),
    })
    response && dispatch(setMyLearnerTrainings(response.trainings))
  }

  // const markVisit = useCallback(
  //   async (learnerId: Id, trainingId: Id) => {
  //     dispatch(showLoading())
  //     await dispatch(markVisitTraining({ userId: learnerId, trainingId }))
  //     await getTrainings(learnerId)
  //     dispatch(hideLoading())
  //   },
  //   [user, markVisitTraining, getTrainings],
  // )

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
          renderItem={({ item, section }) => <LearnerTrainingListItem item={item} gymImg={section.gym.img} />}
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
