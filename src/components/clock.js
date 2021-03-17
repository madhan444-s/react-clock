import React from 'react';
import moment from 'moment'
import { Icon, InlineIcon } from '@iconify/react';
import calendarIcon from '@iconify-icons/fa/calendar';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    let month = moment().format('MMMM');
    let date = moment().format('DD');
    let day = moment().format('ddd');
    let year = moment().format('YYYY');
    const calendar = day + ' ' + date + ' ' + month + ' ' + year;
    this.state = {
      time: moment().format('HH:mm:ss'),
      isOpenCalendar: true,
      calendar: calendar
    }
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.timer();
    }, 1000)
  }

  timer = () => {
    this.setState({
      time: moment().format('HH:mm:ss')
    })
  }

  showCalender = () => {
    this.setState({
      isOpenCalendar: true
    })
  }

  hideCalendar = () => {
    this.setState({
      isOpenCalendar: false
    })
  }

  checkboxStyle = {
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    marginRight: '10px'
  }


  render() {
    return (
      <div>
        <div className='calendar-row'>
          {this.state.isOpenCalendar ?
            <input
              type='checkbox'
              defaultChecked={true}
              onChange={() => this.hideCalendar()}
              style={this.checkboxStyle}
            /> :
            <input
              type='checkbox'
              onChange={() => this.showCalender()}
              style={this.checkboxStyle}

            />
          }
          <Icon className='calendar-icon' icon={calendarIcon} />
        </div>
        <div className='clock-timer'>
          <div className='row'>
            <h1>{this.state.time}</h1>
            {this.state.isOpenCalendar ? <h4>{this.state.calendar}</h4> : <div></div>}
          </div>
        </div>
      </div >
    )
  }
}
export default Clock