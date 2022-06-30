import React, { useEffect, useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'
import { FlatList } from 'react-native-gesture-handler'

import { GetTrainerTrainings } from '../../../api/training/training'
import { Id } from '../../../api/user/types'

import { useAuthContext } from '../../../components/AuthProvider/AuthProvider'

import { useHttpRequest } from '../../../hooks'
import { useAppSelector } from '../../../redux/hooks'
import { selectMyTrainings, setMyTrainerTrainings } from '../../../redux/slices/myTrainings.slice'

import { darkTheme, MyTrainingsTrainerParamList, ScreenNames } from '../../../common'

import NoDataText from '../components/NoDataText'
import TrainingListItem from './components/TrainingListItem'

type ProfileScreenNavigationProp = NativeStackNavigationProp<MyTrainingsTrainerParamList>

const TrainerMyTrainingsScreen: React.FC = (): React.ReactElement => {
  const { t } = useTranslation()

  const { user } = useAuthContext()
  const { myTrainerTrainings } = useAppSelector(selectMyTrainings)

  const navigation = useNavigation<ProfileScreenNavigationProp>()
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

  const onPress = (id: Id) => {
    navigation.navigate(ScreenNames.MyTrainingsTrainerTraining, {
      trainingId: id,
    })
  }

  useEffect(() => {
    getServerTrainings(user?.id || 0)
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <View style={styles.container}>
        {myTrainerTrainings.length === 0 ? (
          <NoDataText text={t('learnerTrainings:noData')} />
        ) : (
          <>
            <Text style={styles.title}>{t('trainerTrainings:trainingList')}</Text>
            <FlatList
              data={myTrainerTrainings}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => <TrainingListItem training={item} onPress={onPress} />}
            />
          </>
        )}
      </View>
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
    paddingVertical: '10%',
  },
  title: {
    color: darkTheme.textMain,
    fontWeight: 'bold',
    fontSize: 32,
  },
})
