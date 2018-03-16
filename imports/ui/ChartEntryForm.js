import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createChartEntry = gql`
  mutation createChartEntry($date: Date!, $number: Int!) {
    createChartEntry(date: $date, number: $number) {
      _id
    }
  }
`;

class ChartEntryForm extends Component {
  submitForm = () => {
    console.log(this.date.value, this.number.value);
    this.props.createChartEntry({
      variables: {
        date: this.date.value,
        length: this.number.value
      }
    }).then(({data}) => {
      this.props.refetch();
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="entry-date">Date</label>
          <input type="date" name="entry-date" id="entry-date" ref={(input) => (this.date = input)}/>
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <input type="number" name="number" id="number" ref={(input) => (this.number = input)} />
        </div>


        <div>
          <label htmlFor="flow">Flow</label>
          <select name="flow" id="flow">
            <option value="VL">Very Light</option>
            <option value="L">Light</option>
            <option value="M">Medium</option>
            <option value="H">Heavy</option>
            <option value="B">Brown</option>
          </select>
        </div>


        <div className="checkboxes">
          <label htmlFor="quality-brown">
            <input type="checkbox" name="quality-brown" id="quality-brown"/>
            <span>Brown</span>
          </label>
          <label htmlFor="quality-cloudy">
            <input type="checkbox" name="quality-cloudy" id="quality-cloudy"/>
            <span>Cloudy</span>
          </label>
          <label htmlFor="quality-cloudy-clear">
            <input type="checkbox" name="quality-cloudy-clear" id="quality-cloudy-clear"/>
            <span>Cloudy Clear</span>
          </label>
          <label htmlFor="quality-gummy">
            <input type="checkbox" name="quality-gummy" id="quality-gummy"/>
            <span>Gummy</span>
          </label>
          <label htmlFor="quality-clear">
            <input type="checkbox" name="quality-clear" id="quality-clear"/>
            <span>Clear</span>
          </label>
          <label htmlFor="quality-lubricative">
            <input type="checkbox" name="quality-lubricative" id="quality-lubricative"/>
            <span>Lubricative</span>
          </label>
          <label htmlFor="quality-pasty">
            <input type="checkbox" name="quality-pasty" id="quality-pasty"/>
            <span>Pasty</span>
          </label>
          <label htmlFor="quality-yellow">
            <input type="checkbox" name="quality-yellow" id="quality-yellow"/>
            <span>Yellow</span>
          </label>
        </div>

        <div>
          <label htmlFor="frequency">Frequency</label>
          <select name="frequency" id="frequency">
            <option value="1">1x</option>
            <option value="2">2x</option>
            <option value="3">3x</option>
            <option value="AD">AD</option>
          </select>
        </div>

        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

export default graphql(createChartEntry, {
  name: 'createChartEntry' // adds the mutation to this.props
})(ChartEntryForm)