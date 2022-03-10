import React from 'react';
import { Choice, Result } from './View';


function Decision(props) {
  const isDecision = props.isDecision;
  // const isAdd = props.isAdd;

  if (isDecision) {
    return <Choice />;
  }
  return <Result />;
}
export default Decision;
