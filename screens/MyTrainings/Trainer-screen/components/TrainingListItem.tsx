import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { PartTraining } from '../../../../api/training/types'
import { Id } from '../../../../api/user/types'
import { darkTheme } from '../../../../common'

interface TrainingListItemProps {
  item: PartTraining
  onPress?: (id: Id) => void
}

const TrainingListItem: React.FC<TrainingListItemProps> = ({ item, onPress }): React.ReactElement => {
  const { t } = useTranslation()

  const strDate = item.trainingDateTime as string
  const date = strDate.split(' ')[0]
  const time = strDate.split(' ')[1].substring(0, 5)

  const handlePress = (id: Id) => {
    onPress && onPress(id)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress(item.id)}>
      <Text style={styles.title}>
        {t('trainerTrainings:gym')}: {item.title}
      </Text>
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
