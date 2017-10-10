import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { card, btnPrimary, btnLink, btn, btnTextOutline, btnText } from './../../utils/styles'

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
    const perc = ((correctAnswers * 100) / totalQuestions).toFixed(1)

    message = ''

    if(perc >= 0) message = "😔 Nothing at all? Try again!"
    if(perc >= 20) message = "😔 Too bad."
    if(perc >= 40) message = "📖 Let's do some more practice. Try again."
    if(perc >= 60) message = "💪 That was good! But you can do better"
    if(perc >= 80) message = "👍 Awesome! You did a great job"
    if(perc >= 99) message = "👏 Congratulations! You nailed it."


    return {
      message,
      perc
    }
  }
  render() {
    const { currentQuestion, totalQuestions, showAnswer, showResults } = this.state
    const question = !!this.props.deck.questions[currentQuestion] ? this.props.deck.questions[currentQuestion] : null

    if(showResults) {
      const result = this.getResult()
      return (
        <View style={styles.center}>
          <Text style={{ fontSize: 30 }}>{result.perc}%</Text>
          <Text style={{ fontSize: 20 }}>{result.message}</Text>

          {result.perc < 99 && (
            <TouchableOpacity
              onPress={() => this.setState({
                showResults: false,
                showAnswer: false,
                currentQuestion: 0,
                correctAnswers: 0
              })}
              style={[btn]}>
              <Text style={btnText}>Try again</Text>
            </TouchableOpacity>
          )}
        </View>
      )
    }


    return (
      <View style={card}>
        <View style={styles.questionHeader}>
          <Text style={styles.questionHeaderText}>{currentQuestion+1}/{totalQuestions}</Text>
        </View>
        <Text style={styles.question}>
          {showAnswer ? question.correctAnswer : question.title}
        </Text>
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
                  style={[btn, { marginTop: 20 }]}>
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
  question: {
    fontSize: 20,
  },
  answer: {
    padding: 20
  },
  answerText: {
    fontSize: 17
  },
  actions: {
    flexDirection: 'row'
  },
  questionHeader: {
    position: 'absolute',
    right: 5,
    top: 5
  },
  questionHeaderText: {
    color: '#aaa',
    padding: 3,
    paddingLeft: 6,
    paddingRight: 6
  }
})
export default connect(mapStateToProps)(Quiz)
