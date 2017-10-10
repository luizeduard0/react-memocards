import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import Decks from './screens/Decks'
import AddDeck from './screens/AddDeck'
import ShowDeck from './screens/ShowDeck'
import AddCard from './screens/AddCard'
import Quiz from './screens/Quiz'

export const TabNavigation = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      title: 'Decks',
      tabBarIcon: () => <MaterialCommunityIcons name='cards' size={30} color={'black'}  />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: 'Add Deck',
      tabBarIcon: () => <SimpleLineIcons name='plus' size={30} color={'black'}  />
    }
  }
})

export const MainNavigation = StackNavigator({
  Home: {
    screen: TabNavigation,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: ShowDeck
  },
  Quiz: {
    screen: Quiz
  },
  AddCard: {
    screen: AddCard
  }
})
