import React from 'react';
import { Ai, AiFillClockCircle, AiOutlineClockCircle } from 'react-icons/ai'
import Clock from './clock';

class Dislay extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className='card'>
        <span>Apple iphone 6s</span>
        <div className='react-clock'>
          <AiOutlineClockCircle
            style={{ marginRight: '20px', fontSize: '60px' }}
          />
          <div>React Clock</div>
        </div>
        <Clock />
      </div>
    )
  }
}

export default Dislay
