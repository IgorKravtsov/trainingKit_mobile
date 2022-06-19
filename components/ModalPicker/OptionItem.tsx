import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { ModalPickerOption } from '../../interfaces'

interface OptionItemProps {
  option: ModalPickerOption
  onPressItem: (option: ModalPickerOption) => void
}

const OptionItem: React.FC<OptionItemProps> = ({ option, onPressItem }): React.ReactElement => {
  return (
    <TouchableOpacity style={styles.option} onPress={() => onPressItem(option)}>
      <Text style={styles.text}>{option.label}</Text>
    </TouchableOpacity>
  )
}

export default OptionItem

const styles = StyleSheet.create({
  option: {
    alignItems: 'flex-start',
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
})
