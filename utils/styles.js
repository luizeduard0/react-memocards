import React from 'react'
import { Platform, StyleSheet } from 'react-native'

export default globalStyle = StyleSheet.create({
  btn: {
    padding: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#aaa',
    alignItems: 'center',
    borderRadius: Platform.OS === 'ios' ? 6 : 2
  },
  btnText: {
    color: '#fff'
  },
  btnTextOutline: {
    color: '#aaa'
  },
  btnPrimary: {
    backgroundColor: '#4286f4',
  },
  btnDanger: {
    backgroundColor: '#cf4f32',
  },
  btnOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#aaa',
  },
  textBold: {
    fontWeight: 'bold'
  },
  btnLink: {
    backgroundColor: 'transparent',
    borderWidth: 0
  },
  card: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    minHeight: 160,
    padding: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    shadowColor: '#000',
    shadowOpacity: 0.09,
    shadowOffset: {
      width: 0,
      height: 1
    },
    alignItems: 'center',
    justifyContent: 'center'
  }
})
