import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

export const MEMOCARD_KEY = 'MEMOCARD::DB'
export const NOTIFICATION_KEY = 'MEMOCARD::NOTIFICATION'

export const uuid = () => {
  return Math.random().toString(36).substr(-8)
}

function createNotification() {
  return {
    title: 'Time to study',
    body: '👋 Don\'t forget to study your cards today',
    ios: {
      sound: true
    },
    android: {
      sound: true,
      vibrate: true,
      priority: 'high',
      sticky: false
    }
  }
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {

      if(data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if(status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )
            }
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          })
      }
    })
}
