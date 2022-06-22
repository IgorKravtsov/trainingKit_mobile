import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { PartTraining } from '../../../../api/training/types'
import { darkTheme } from '../../../../common'
import { formatDate, formatTime } from '../../../../util'

interface TrainingListItemProps {
  item: PartTraining
}

const TrainingListItem: React.FC<TrainingListItemProps> = ({ item }): React.ReactElement => {
  const strDate = item.trainingDateTime as string
  const date = strDate.split(' ')[0]
  const time = strDate.split(' ')[1].substring(0, 5)
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Gym: {item.title}</Text>
      <Text style={styles.date}>
        {date} - {time}
      </Text>
    </TouchableOpacity>
  )
}

export default TrainingListItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
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
