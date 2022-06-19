import React, { useState } from 'react'
import { Pressable, TouchableOpacity } from 'react-native'
import DateTimePicker, { DatePickerOptions } from '@react-native-community/datetimepicker'

import Input from '../Input/Input'
import { getStringDate } from '../../util'

interface DatePickerProps extends DatePickerOptions {
  separator?: string
  label?: string
}

const DatePicker: React.FC<DatePickerProps> = ({ value, separator, label, onChange, ...props }): React.ReactElement => {
  const [isShowPicker, setIsShowPicker] = useState(false)
  const [dateValue, setDateValue] = useState(value || new Date())
  const [dateText, setDateText] = useState(getStringDate(value || new Date(), separator))

  const handleOnChange = (e: any, selectedDate?: Date) => {
    const newValue = selectedDate || dateValue
    setDateValue(newValue)
    setIsShowPicker(false)
    const newText = getStringDate(newValue, separator)
    setDateText(newText)

    onChange && onChange(e, newValue)
  }

  return (
    <>
      <TouchableOpacity onPress={() => setIsShowPicker(prevState => !prevState)}>
        <Input editable={false} value={dateText} label={label} />
      </TouchableOpacity>
      {isShowPicker && <DateTimePicker {...props} value={dateValue} onChange={handleOnChange} />}
    </>
  )
}

export default DatePicker
