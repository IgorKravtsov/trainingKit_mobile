import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { PartTraining } from '../../../../api/training/types'
import { darkTheme } from '../../../../common'
import { formatDate, formatTime } from '../../../../util'

interface TrainingListItemProps {
  item: PartTraining
}

const TrainingListItem: React.FC<TrainingListItemProps> = ({ item }): React.ReactElement => {
  console.log('fojnrguirebgurebguirebguiers', item)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      {/* <Text style={styles.date}>
        {formatDate(item.trainingDateTime)} - {formatTime(item.trainingDateTime)}
      </Text> */}
    </View>
  )
}

export default TrainingListItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: darkTheme.textMain,
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: darkTheme.textMain,
    fontSize: 14,
  },
})
