import React from 'react'
import * as actionCreators from '../state/action-creators'
import {connect} from 'react-redux';

export function Message(props) {
  const {
    infoMessage
    } = props
  return <div id="message">{infoMessage}</div>
}
export default connect(state => state, actionCreators)(Message);