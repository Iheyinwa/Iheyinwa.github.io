import React from 'react';
import Input from './Input';

import { Header} from './Components';

function Choice(props) {
  return (
    <div>
      <Header />
      <div id="main">
        <div id="section">
          <input type="text" placeholder="enter your question" />
          <ul>
            <Input text="choice" />
            <Input text="choice" />
            <Input text="choice" />
          </ul>
        </div>
        <aside>
          <p>Frequently Asked Questions</p>
        </aside>
      </div>
    </div>
  );
}

function Result(props) {
  return (
    <div>
      <Header />
      </div>
  )
}
export { Choice, Result };
