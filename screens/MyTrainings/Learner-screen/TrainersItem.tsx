import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { PublicAppUserDto } from '../../../api/user/interfaces'
import { darkTheme } from '../../../common'

interface TrainersItemProps {
  trainers: PublicAppUserDto[]
}

const TrainersItem: React.FC<TrainersItemProps> = ({ trainers }): React.ReactElement => {
  return (
    <>
      {trainers.map(t => (
        <Text style={styles.trainers} key={t.id}>
          {t.displayName}
        </Text>
      ))}
    </>
  )
}

export default TrainersItem

const styles = StyleSheet.create({
  trainers: { color: darkTheme.textMain, fontSize: 16 },
})
