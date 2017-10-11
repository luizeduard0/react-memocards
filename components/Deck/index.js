import React from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import globalStyle from './../../utils/styles'
import { MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons'

export default Deck = ({ deck, navigation,  type='compact' }) => {
  return (
    <View style={styles.deck}>
      <View style={styles.header}>
        <Text style={styles.title}>{ deck.title }</Text>
        <Text style={styles.subtitle}>{deck.questions.length || 0} {deck.questions.length === 1 ? 'card' : 'cards'}</Text>
      </View>
      {type==='complete' && (
        <View style={styles.actionBtns}>
          <TouchableOpacity onPress={() => navigation.navigate('AddCard', { id: deck.id })} style={[globalStyle.btn, globalStyle.btnOutline]}>
            <Text style={globalStyle.btnTextOutline}>
              <MaterialCommunityIcons name='cards' size={17} />
              Add Card
            </Text>
          </TouchableOpacity>
          {deck.questions.length > 0 && (
            <TouchableOpacity onPress={() => navigation.navigate('Quiz', { id: deck.id })} style={[globalStyle.btn, globalStyle.btnPrimary ]}>
              <Text style={globalStyle.btnText}>
                <MaterialCommunityIcons name='play' size={17} /> Quiz
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
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
  },
  actionBtns: {
    marginTop: 20,
    flexDirection: 'row',
  }
})
