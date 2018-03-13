// IMPORTS
// - libraries
import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize'; // needed for react-dates
import { SingleDatePicker } from 'react-dates';
import { Redirect } from 'react-router-dom';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toFixed(2).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = date => {
    // note: date is a moment object
    // if (date) {
    //   this.setState(() => ({ createdAt: date }));
    // }
    this.setState(() => ({ createdAt: date }));
    // console.log(`change to date: `, date);
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
    // optional validation
    // if (!this.state.createdAt) {
    //   this.setState(() => ({ error: 'Please enter a valid date' }));
    // } else {
    //   this.setState(() => ({ error: '' }));
    // }
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description) {
      this.setState(() => ({ error: 'Please enter a description' }));
    } else if (!this.state.amount) {
      this.setState(() => ({ error: 'Please enter an amount' }));
    } else if (!this.state.createdAt) {
      this.setState(() => ({ error: 'Please enter a valid date' }));
    } else {
      this.setState(() => ({ error: '' }));
      // console.log('submitted!');
      // use onSubmit prop
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description (required)"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus
            required
          />
          <br />
          <input
            type="text"
            placeholder="Amount (required)"
            value={this.state.amount}
            onChange={this.onAmountChange}
            required
          />
          <br />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <br />
          <textarea
            name="notes"
            id=""
            cols="40"
            rows="3"
            placeholder="Additional Notes (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <br />
          <button>{this.props.actionText}</button>
          {this.state.error ? <p className="error-text">{this.state.error}</p> : null}
        </form>
      </div>
    );
  }
}

// <button onClick={() => this.props.history.push('/')}>Cancel</button>
// <input type="date" value={this.state.amount} onChange={this.onDateChange} />

// course version of code
// import React from 'react';
// import moment from 'moment';
// import 'react-dates/initialize';
// import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

// export default class ExpenseForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       description: props.expense ? props.expense.description : '',
//       note: props.expense ? props.expense.note : '',
//       amount: props.expense ? (props.expense.amount / 100).toString() : '',
//       createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
//       calendarFocused: false,
//       error: ''
//     };
//   }
//   onDescriptionChange = e => {
//     const description = e.target.value;
//     this.setState(() => ({ description }));
//   };
//   onNoteChange = e => {
//     const note = e.target.value;
//     this.setState(() => ({ note }));
//   };
//   onAmountChange = e => {
//     const amount = e.target.value;

//     if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
//       this.setState(() => ({ amount }));
//     }
//   };
//   onDateChange = createdAt => {
//     if (createdAt) {
//       this.setState(() => ({ createdAt }));
//     }
//   };
//   onFocusChange = ({ focused }) => {
//     this.setState(() => ({ calendarFocused: focused }));
//   };
//   onSubmit = e => {
//     e.preventDefault();

//     if (!this.state.description || !this.state.amount) {
//       this.setState(() => ({ error: 'Please provide description and amount.' }));
//     } else {
//       this.setState(() => ({ error: '' }));
//       this.props.onSubmit({
//         description: this.state.description,
//         amount: parseFloat(this.state.amount, 10) * 100,
//         createdAt: this.state.createdAt.valueOf(),
//         note: this.state.note
//       });
//     }
//   };
//   render() {
//     return (
//       <div>
//         {this.state.error && <p>{this.state.error}</p>}
//         <form onSubmit={this.onSubmit}>
//           <input
//             type="text"
//             placeholder="Description"
//             autoFocus
//             value={this.state.description}
//             onChange={this.onDescriptionChange}
//           />
//           <input
//             type="text"
//             placeholder="Amount"
//             value={this.state.amount}
//             onChange={this.onAmountChange}
//           />
//           <SingleDatePicker
//             date={this.state.createdAt}
//             onDateChange={this.onDateChange}
//             focused={this.state.calendarFocused}
//             onFocusChange={this.onFocusChange}
//             numberOfMonths={1}
//             isOutsideRange={() => false}
//           />
//           <textarea
//             placeholder="Add a note for your expense (optional)"
//             value={this.state.note}
//             onChange={this.onNoteChange}
//           />
//           <button>Add Expense</button>
//         </form>
//       </div>
//     );
//   }
// }
