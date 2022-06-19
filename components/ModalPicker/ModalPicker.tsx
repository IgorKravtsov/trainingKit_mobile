import React, { useState } from 'react'
import { Modal, StyleSheet, TouchableOpacity } from 'react-native'

import { ModalPickerOption } from '../../interfaces'

import Input from '../Input/Input'
import InnerModalContent from './InnerModalContent'

interface ModalPickerProps {
  initialData?: ModalPickerOption
  onChange?: (data: ModalPickerOption) => void
  options: ModalPickerOption[]
  label?: string
}

const ModalPicker: React.FC<ModalPickerProps> = ({ options, initialData, label, onChange }): React.ReactElement => {
  const [data, setData] = useState<ModalPickerOption | undefined>(initialData)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const changeVisibility = (bool: boolean) => {
    setIsModalVisible(bool)
  }

  const handleSetData = (data: ModalPickerOption) => {
    setData(data)
    onChange && onChange(data)
  }

  return (
    <>
      <TouchableOpacity onPress={() => changeVisibility(true)} style={styles.touchableOpacity}>
        <Input value={data?.label} editable={false} label={label} />
      </TouchableOpacity>
      <Modal transparent animationType='fade' visible={isModalVisible} onRequestClose={() => changeVisibility(false)}>
        <InnerModalContent changeVisibility={changeVisibility} options={options} setData={handleSetData} />
      </Modal>
    </>
  )
}

export default ModalPicker

const styles = StyleSheet.create({
  text: {
    marginVertical: 20,
    fontSize: 20,
  },
  touchableOpacity: {
    // backgroundColor: 'white',
    alignSelf: 'stretch',
    // paddingHorizontal: 20,
  },
})
