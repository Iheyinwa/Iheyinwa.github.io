import React from 'react';
import './App.css';
import { AnswerButton, AskAgain, AddChoice, AskQuestion } from './Components';
import Decision from './Decision';
// import Input from './Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDecision: true,
      isAdd: false,
      question: [],
      choices: [],
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleAgain = this.handleAgain.bind(this);
  }

  handleAnswer() {
    this.setState({ isDecision: false });
  }

  handleQuestion() {
    this.setState({ isDecision: true });
  }

  handleAdd() {
    return (
    alert(1)
    // <Input />
    )
  }

  handleAgain() {
    this.setState({ isDecision: true });
  }
  render() {
    const isDecision = this.state.isDecision;
    // const isAdd = this.state.isAdd;
    let button;
    let button2;
    if (isDecision) {
      button2 = <AddChoice onClick={this.handleAdd} />;
      button = <AnswerButton onClick={this.handleAnswer} />;
    } else {
      button2 = <AskAgain />;
      button = <AskQuestion onClick={this.handleQuestion} />;
    }

    return (
      <div>
        <Decision isDecision={isDecision} />
        {button2}
        {button}
      </div>
    );
  }
}
export default App;
