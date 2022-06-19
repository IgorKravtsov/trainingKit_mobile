import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, View } from 'react-native'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'

import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import DatePicker from '../../../components/DatePicker/DatePicker'
import { ModalOptionOrganization, SubmitRegister } from '../interfaces'
import { checkIsEmail } from '../../../util'
import ModalPicker from '../../../components/ModalPicker/ModalPicker'

interface FormProps {
  onSubmit: (data: SubmitRegister) => void
}

const Form: React.FC<FormProps> = ({ onSubmit }): React.ReactElement => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const [dob, setDob] = useState<Date>(new Date())
  const [selectedOrganization, setSelectedOrganization] = useState<ModalOptionOrganization | undefined>()
  const [selectedOrganizations, setSelectedOrganizations] = useState<ModalOptionOrganization[]>([
    { label: 'apple' },
    { label: 'a' },
    { label: 'b' },
    { label: 'c' },
    { label: 'd' },
    { label: 'e' },
    { label: 'f' },
    { label: 'g' },
  ])

  const handleOnChange = (e: DateTimePickerEvent, selectedDate?: Date) => {
    selectedDate && setDob(selectedDate)
  }

  const handleOnChangeOrganization = (selectedOrganization: ModalOptionOrganization) => {
    setSelectedOrganization(selectedOrganization)
  }

  const handlePress = () => {
    //validation
    const isNameValid = name.trim().length > 0
    const isLastNameValid = lastName.trim().length > 0
    const isEmailValid = checkIsEmail(email)
    const isPassValid = password.trim().length > 0
    const isConfirmPassValid = confirmPass === password
    const isOrganizationValid = !!selectedOrganization

    if (!isNameValid || !isLastNameValid || !isEmailValid || !isPassValid || !isConfirmPassValid || !isOrganizationValid) {
      Alert.alert('Invalid data', 'Check your data')
      return
    }

    const data: SubmitRegister = {
      name,
      lastName,
      email,
      password,
      DoB: dob,
      organizations: [selectedOrganization.id || 0],
    }

    onSubmit(data)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <Input value={name} onChangeText={text => setName(text)} style={styles.input} label='Name' placeholder='e.g. John' />
        <Input
          value={lastName}
          onChangeText={text => setLastName(text)}
          style={styles.input}
          label='Last name'
          autoCapitalize='none'
          placeholder='e.g. Doe'
        />
      </View>
      <Input
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        label='Email'
        autoCapitalize='none'
        placeholder='myfantasticemail@mail.com'
      />
      <Input value={password} onChangeText={text => setPassword(text)} style={styles.input} label='Password' secureTextEntry />
      <Input value={confirmPass} onChangeText={text => setConfirmPass(text)} style={styles.input} label='Confirm password' secureTextEntry />
      <ModalPicker options={selectedOrganizations} label='Organization' onChange={handleOnChangeOrganization} />
      <DatePicker value={dob} onChange={handleOnChange} label='Date of birth' maximumDate={new Date()} />
      <Button onPress={handlePress} style={styles.btnContainer}>
        REGISTER
      </Button>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 36,
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    minWidth: 150,
  },
  btnContainer: {
    marginVertical: 24,
    // borderRadius: 8,
  },
  btn: {},
})
