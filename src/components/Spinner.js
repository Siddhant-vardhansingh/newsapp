import React, { Component } from 'react'
import loading from './1480.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt=" "/>
      </div>
    )
  }
}
