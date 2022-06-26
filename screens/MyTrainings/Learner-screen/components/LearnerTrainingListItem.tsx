import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { CannotVisitTraining, CannotVisitTrainingType, Training } from '../../../../api/training/types'

import { formatDate, formatTime } from '../../../../util'

import Button from '../../../../components/Button/Button'
import TrainersItem from './TrainersItem'
import { darkTheme } from '../../../../common'
import { useTranslation } from 'react-i18next'

interface LearnerTrainingListItemProps {
  item: Training
  gymImg?: string
}

const LearnerTrainingListItem: React.FC<LearnerTrainingListItemProps> = ({ gymImg, item }): React.ReactElement => {
  const { t } = useTranslation()
  const isGymImg = !!gymImg

  const title = item.title.length > 24 ? item.title.substring(0, 24) + '...' : item.title

  const isDisabledButton = (canBeVisited: boolean | CannotVisitTraining) => {
    if (typeof canBeVisited === 'boolean') {
      return canBeVisited
    } else {
      return canBeVisited.canBeVisited
    }
  }

  const getBtnText = (training: Training) => {
    const { canBeVisited } = training

    if (typeof canBeVisited === 'boolean') {
      // return 'Mark'
      return t('learnerTrainings:markVisiting')
    }

    switch (canBeVisited?.type) {
      case CannotVisitTrainingType.Time:
        return t('learnerTrainings:wrongTime')
      // return 'Wrong time'

      case CannotVisitTrainingType.AlreadyMarked:
        return t('learnerTrainings:markedAlready')
      // return 'Already marked'

      default:
        return t('learnerTrainings:markVisiting')
      // return 'Mark'
    }
  }

  return (
    <View style={styles.container}>
      <Image source={isGymImg ? { uri: gymImg } : require('../../../../assets/no-image-icon.png')} width={100} height={100} style={styles.img} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <TrainersItem trainers={item.trainers} />
        <Text style={styles.date}>
          {formatDate(item.trainingDateTime)} - {formatTime(item.trainingDateTime)}
        </Text>
      </View>
      <Button mode='flat' disabled={!isDisabledButton(item?.canBeVisited || true)} style={{ alignItems: 'center' }}>
        {getBtnText(item)}
      </Button>
    </View>
  )
}

export default LearnerTrainingListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 5,
    // borderWidth: 1,
    // shadowColor: '#1c234c',
    shadowColor: '#000',
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    // elevation: 4,
  },
  img: { width: 80, height: 80 },
  title: { color: darkTheme.textMain, fontSize: 16 },
  date: { color: darkTheme.textMain },
})
