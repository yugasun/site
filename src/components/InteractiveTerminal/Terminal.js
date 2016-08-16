import React, {Component, PropTypes} from 'react'
import styles from './Terminal.css'

const propTypes = {
  children: PropTypes.any
}

export default class Ternimal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      commands: {},
      history: [],
      prompt: '$ '
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  clearHistory () {
    this.setState({ history: [] })
  }
  registerCommands () {
    this.setState({
      commands: {
        'clear': this.clearHistory.bind(this),
        'ls': this.listFiles.bind(this),
        'intro': this.showWelcomeMsg.bind(this),
        'help': this.showHelp.bind(this),
        'github': this.openLink('http://github.com/serverless'),
      }
    })
  }
  listFiles () {
    this.addHistory('README.md')
  }
  showWelcomeMsg () {
    this.addHistory('Welcome to Serverless.com')
    this.addHistory('Type `help` to see what all commands are available')
  }
  openLink (link) {
    return function () {
      window.open(link, '_blank')
    }
  }
  showHelp () {
    this.addHistory('help - this help text')
    this.addHistory('source - browse the code for this page')
    this.addHistory('clear - clear screen')
    this.addHistory('ls - list files')
  }
  componentDidMount () {
    var term = this.refs.term
    this.registerCommands()
    this.showWelcomeMsg()
    term.focus()
  }
  componentDidUpdate () {
    var el = this.refs.terminal
      // var container = document.getElementsByClassName('container')[0];
    var container = document.getElementById('main')
    container.scrollTop = el.scrollHeight
  }
  handleInput (e) {
    if (e.key === 'Enter') {
      var input_text = this.refs.term.value
      var input_array = input_text.split(' ')
      var input = input_array[0]
      var arg = input_array[1]
      var command = this.state.commands[input]

      this.addHistory(this.state.prompt + ' ' + input_text)

      if (command === undefined) {
        this.addHistory('sh: command not found: ' + input)
      } else {
        command(arg)
      }
      this.clearInput()
    }
  }
  clearInput () {
    this.refs.term.value = ''
  }
  addHistory (output) {
    var history = this.state.history
    history.push(output)
    this.setState({
      'history': history
    })
  }
  handleClick () {
    var term = this.refs.term
    term.focus()
  }
  render () {
    var output = this.state.history.map(function (op, i) {
      return <p key={i}>{op}</p>
    })
    return (
      <div className={styles.window} id='main' ref='terminal'>
        <div className={styles.bar}>
          <div className={styles.btn}></div>
        </div>
        <div className={styles.body}>
          <div className={styles.inputContainer} onClick={this.handleClick}>
            {output}
            <p>
              <span className={styles.prompt}>
                {this.state.prompt}
              </span>
              <input
                type='text'
                className={styles.input}
                onKeyPress={this.handleInput}
                ref='term'
              />
            </p>
          </div>
        </div>
      </div>
    )
  }
}

Ternimal.propTypes = propTypes
