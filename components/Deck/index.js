import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

export default Deck = () => {
  return (
    <View style={styles.deck}>
      <View style={styles.header}>
        <Text style={styles.title}>French Lessons</Text>
        <Text style={styles.subtitle}>{3} cards</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
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
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 15,
    color: '#888'
  }
})
