import React from 'react'
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

import { ModalPickerOption } from '../../interfaces'
import NoContent from './NoContent'
import OptionItem from './OptionItem'

interface InnerModalContentProps {
  options: ModalPickerOption[]
  changeVisibility: (bool: boolean) => void
  setData: (data: ModalPickerOption) => void
}

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const InnerModalContent: React.FC<InnerModalContentProps> = ({ options, changeVisibility, setData }): React.ReactElement => {
  const onPressItem = (option: ModalPickerOption) => {
    changeVisibility(false)
    setData(option)
  }

  return (
    <TouchableOpacity onPress={() => changeVisibility(false)} style={styles.container}>
      <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 2 }]}>
        <ScrollView>
          {options.length === 0 ? <NoContent /> : options.map(option => <OptionItem key={option.label} option={option} onPressItem={onPressItem} />)}
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
}

export default InnerModalContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
})
