import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Deck from './../../components/Deck'
import { btn, btnPrimary, btnText, textBold } from './../../utils/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

class Decks extends Component {
  render() {
    const { navigation, decks, style={} } = this.props

    if(!decks.length) {
      return (
        <View style={[styles.center, style]}>
          <MaterialCommunityIcons name='cards-outline' size={100} color={'#aaa'} />
          <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 20, color: '#333' }}>
            <Text style={{ fontWeight: 'bold', color: '#4286f4' }}>MemoCard</Text> is a great way to improve your studies.
          </Text>
          <Text style={{ marginTop: 10, marginBottom: 40, color: '#888' }}>
            Do this few minutes everyday and you will get great results.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddDeck')} style={[btn, btnPrimary]}>
            <Text style={btnText}><Text style={textBold}>New Deck</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>All Decks</Text>
        <FlatList
          data={decks}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Deck', {
              id: item.id
            })}>
              <Deck deck={item} navigation={navigation}  />
            </TouchableOpacity>
          )}
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 40
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  title: {
    fontSize: 25,
    padding: 10
  }
});

function mapStateToProps({ decks={} }) {
  return {
    decks: Object.keys(decks)
                 .map(key => {
                   const deck = decks[key]
                   deck.questions = Object.keys(deck.questions)
                                          .map(questionKey => deck.questions[questionKey])

                  return deck
                 })
  }
}

export default connect(mapStateToProps)(Decks)
