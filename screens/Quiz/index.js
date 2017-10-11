import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { card, btnPrimary, btnLink, btn, btnTextOutline, btnText, btnDanger } from './../../utils/styles'
import { clearLocalNotification } from './../../utils/helpers'

class Quiz extends Component {
  state = {
    currentQuestion: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    showAnswer: false,
    showResults: false
  }
  componentDidMount() {
    this.setState({
      totalQuestions: this.props.deck.questions.length
    })
  }
  answer = result => {
    let nextQuestion = this.state.currentQuestion + 1
    let lastQuestion = this.state.totalQuestions-1

    if(nextQuestion > lastQuestion) {
      this.setState({ showResults: true })
      nextQuestion = lastQuestion

      clearLocalNotification()

    }

    switch(result) {
      case 'correct':
        this.setState(state => ({
          showAnswer: false,
          correctAnswers: state.correctAnswers + 1,
          currentQuestion: nextQuestion
        }))
        return

      case 'incorrect':
        this.setState(state => ({
          showAnswer: false,
          currentQuestion: nextQuestion
        }))
        return

      default:
        return
    }
  }
  getResult = () => {
    const { totalQuestions, correctAnswers } = this.state
    const perc = ((correctAnswers * 100) / totalQuestions).toFixed(0)

    let backgroundColor = 'transparent'
    let message = ''

    if(perc >= 0) {
      message = "😔 Nothing at all?"
      backgroundColor = '#db6a50'
    }
    if(perc >= 20) {
      message = "😔 Too bad."
      backgroundColor = '#e1a75b'
    }
    if(perc >= 40) {
      message = "📖 Let's do some more practice."
      backgroundColor = '#e1c95b'
    }
    if(perc >= 60) {
      message = "💪 That was good! But you can do better"
      backgroundColor = '#3fa3dc'
    }
    if(perc >= 80) {
      message = "👍 Awesome! You did a great job"
      backgroundColor = '#64be4f'
    }
    if(perc >= 99) {
      message = "👏 Congratulations! You nailed it."
      backgroundColor = '#78dd61'
    }


    return {
      message,
      perc,
      backgroundColor
    }
  }
  render() {
    const { currentQuestion, totalQuestions, showAnswer, showResults } = this.state
    const { navigation } = this.props
    const question = !!this.props.deck.questions[currentQuestion] ? this.props.deck.questions[currentQuestion] : null

    if(showResults) {
      const result = this.getResult()
      return (
        <View style={[styles.center, { backgroundColor: result.backgroundColor }]}>
          <Text style={styles.resultText}>{result.perc}%</Text>
          <Text style={styles.resultTextSmall}>{result.message}</Text>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => this.setState({
                showResults: false,
                showAnswer: false,
                currentQuestion: 0,
                correctAnswers: 0
              })}
              style={[btn, { backgroundColor: 'rgba(0,0,0,0.3)' }]}>
              <Text style={[btnText]}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Deck', { id: navigation.state.params.id  })}
              style={[btn, { backgroundColor: 'rgba(0,0,0,0.3)' }]}>
              <Text style={[btnText]}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }


    return (
      <View style={card}>
        <View style={styles.questionBreadcrumbs}>
          <Text style={styles.questionBreadcrumbsText}>{currentQuestion+1}/{totalQuestions}</Text>
        </View>
        <View style={[styles.questionHeader, {marginTop: this.state.showAnswer ? 20 : 0}]}>
          <Text style={[styles.question, this.state.showAnswer && styles.correctAnswer]}>
            {showAnswer ? question.correctAnswer : question.title}
          </Text>
        </View>
        {showAnswer && (
          <View style={styles.answer}>
            <TouchableOpacity
                onPress={() => this.setState({ showAnswer: false })}
                style={[btn, btnLink, { marginTop: 5 }]}>
              <Text style={btnTextOutline}>Question</Text>
            </TouchableOpacity>
            <View style={styles.actions}>
              <TouchableOpacity
                  onPress={() => this.answer('incorrect')}
                  style={[btn, btnDanger, { marginTop: 20 }]}>
                <Text style={[btnText, {fontSize: 16}]}>Incorrect</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => this.answer('correct')}
                  style={[btn, btnPrimary, { marginTop: 20 }]}>
                <Text style={[btnText, {fontSize: 16}]}>Correct</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) || (
          <TouchableOpacity
              onPress={() => this.setState({ showAnswer: true })}
              style={[btn, btnLink, { marginTop: 5 }]}>
            <Text style={btnTextOutline}>Answer</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

function mapStateToProps({ decks }, { navigation }) {
  const { id } = navigation.state.params
  return {
    id: id,
    deck: decks[id]
  }
}
const styles = new StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  questionHeader: {
  },
  question: {
    fontSize: 20,
  },
  answer: {
    padding: 20
  },
  correctAnswer: {
    color: 'green'
  },
  answerText: {
    fontSize: 17
  },
  actions: {
    flexDirection: 'row'
  },
  questionBreadcrumbs: {
    position: 'absolute',
    right: 5,
    top: 5
  },
  questionBreadcrumbsText: {
    color: '#aaa',
    padding: 3,
    paddingLeft: 6,
    paddingRight: 6
  },
  resultText: {
    fontSize: 70,
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.06)',
    textShadowOffset: {
      width: 0,
      height: 2
    }
  },
  resultTextSmall: {
    fontSize: 19,
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.06)',
    textShadowOffset: {
      width: 0,
      height: 2
    }
  }
})
export default connect(mapStateToProps)(Quiz)
