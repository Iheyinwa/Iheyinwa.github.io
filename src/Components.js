import React from 'react';
import { Logos } from './svg/icons';

function Header() {
  return (
    <h3 id="header">
      <Logos />
      CHOICE MAKER APP
    </h3>
  );
}
function AnswerButton(props) {
  return (
    <button className="answer" onClick={props.onClick}>
      {' '}
      answer{' '}
    </button>
  );
}

function AskAgain(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {' '}
      ask again{' '}
    </button>
  );
}

function AddChoice(props) {
  return (
    <button className="choice" onClick={props.onClick}>
      {' '}
      add choice{' '}
    </button>
  );
}

function AskQuestion(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {' '}
      ask question{' '}
    </button>
  );
}
export { Header, AnswerButton, AskAgain, AddChoice, AskQuestion };
