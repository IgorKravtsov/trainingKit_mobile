import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { Id } from '../../../api/user/types'
import { GetTrainerTrainings } from '../../../api/user/user'
import { darkTheme, MyTrainingsTrainerParamList, ScreenNames } from '../../../common'
import { useAuthContext } from '../../../components/AuthProvider/AuthProvider'
import { useHttpRequest } from '../../../hooks'
import { useAppSelector } from '../../../redux/hooks'
import { selectMyTrainings, setMyTrainerTrainings } from '../../../redux/slices/myTrainings.slice'
import NoData from '../components/NoData'
import TrainingListItem from './components/TrainingListItem'

type ProfileScreenNavigationProp = NativeStackNavigationProp<MyTrainingsTrainerParamList>

const TrainerMyTrainingsScreen: React.FC = (): React.ReactElement => {
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
    // <ScrollView contentContainerStyle={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
    <View style={styles.container}>
      {myTrainerTrainings.length === 0 ? (
        <NoData />
      ) : (
        <>
          <Text style={styles.title}>Training List</Text>
          <FlatList
            data={myTrainerTrainings}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <TrainingListItem item={item} onPress={onPress} />}
          />
        </>
      )}
      {/* </ScrollView> */}
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
    paddingVertical: '10%',
  },
  title: {
    color: darkTheme.textMain,
    fontWeight: 'bold',
    fontSize: 32,
  },
})
