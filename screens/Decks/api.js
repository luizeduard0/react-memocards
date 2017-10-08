import React from 'react'
import { AsyncStorage } from 'react-native'
import { MEMOCARD_KEY } from './../../utils/helpers'
import { uuid } from './../../utils/helpers'


export const get = () => {
  return AsyncStorage.getItem(MEMOCARD_KEY)
          .then(JSON.parse)
}

export const save = title => {
  AsyncStorage.setItem(MEMOCARD_KEY, JSON.stringify({
    id: uuid(),
    title
  }))

  return get()

}
