import React from 'react'
import { Platform } from 'react-native'

export const btn = {
  padding: 10,
  marginTop: 10,
  marginLeft: 50,
  marginRight: 50,
  backgroundColor: '#aaa',
  alignItems: 'center',
  borderRadius: Platform.OS === 'ios' ? 6 : 2
}

export const btnText = {
  color: '#fff'
}

export const btnPrimary = {
  backgroundColor: '#4286f4',
}

export const textBold = {
  fontWeight: 'bold'
}
