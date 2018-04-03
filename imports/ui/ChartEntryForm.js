import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createChartEntry = gql`
  mutation createChartEntry($date:Date!, $consistency: Consistency!, $flow:Flow = null, $qualities:[Qualities], $frequency:Frequency, $intercourse:Boolean) {
    createChartEntry(date: $date, consistency: $consistency, flow: $flow, qualities: $qualities, frequency: $frequency, intercourse:$intercourse) {
      _id
    }
  }
`;

class ChartEntryForm extends Component {

  submitForm = () => {
    console.log(this.intercourse.value);
    this.quality.forEach((value, index) => {
      console.log(value, this.quality[index]);
    })
    this.props.createChartEntry({
      variables: {
        date: this.date.value,
        consistency: this.consistency.value,
        flow: this.flow.value || null,
        qualities: this.quality,
        frequency: this.frequency.value,
        intercourse: this.intercourse.value
      }
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="entry-date">Date</label>
          <input type="date" name="entry-date" id="entry-date" ref={(input) => (this.date = input)} />
        </div>

        <div>
          <label htmlFor="consistency">Consistency</label>
          <select name="consistency" id="consistency" ref={(input) => (this.consistency = input)}>
            <option value="">Select Consistency</option>
            <option value="dry">Dry (0)</option>
            <option value="dampWoLub">Damp w/o Lubrication (2)</option>
            <option value="wetWoLub">Wet w/o Lubrication (2W)</option>
            <option value="shinyWoLub">Shiny w/o Lubrication (4)</option>
            <option value="sticky">Sticky (6)</option>
            <option value="tacky">Tacky (8)</option>
            <option value="stretch">Stretchy (10)</option>
            <option value="dampWLub">Damp w/ Lubrication (10DL)</option>
            <option value="shinyWLub">Shiny w/ Lubrication (10SL)</option>
            <option value="wetWLub">Wet w/ Lubrication (10WL)</option>
          </select>
        </div>

        <div>
          <label htmlFor="flow">Flow</label>
          <select name="flow" id="flow" ref={(input) => (this.flow = input)}>
            <option value="">Select Flow</option>
            <option value="VL">Very Light</option>
            <option value="L">Light</option>
            <option value="M">Medium</option>
            <option value="H">Heavy</option>
            <option value="B">Brown</option>
          </select>
        </div>

        <div className="checkboxes">
          <fieldset>
            <legend>
              Qualities
            </legend>

            {this.quality = []}

            <label htmlFor="quality-brown">
              <input ref={(input) => (this.quality.brown = input)} type="checkbox" name="quality-brown" id="quality-brown" />
              <span>Brown</span>
            </label>
            <label htmlFor="quality-cloudy">
              <input ref={(input) => (this.quality.cloudy = input)} type="checkbox" name="quality-cloudy" id="quality-cloudy" />
              <span>Cloudy</span>
            </label>
            <label htmlFor="quality-cloudy-clear">
              <input ref={(input) => (this.quality.cloudyClear = input)} type="checkbox" name="quality-cloudy-clear" id="quality-cloudy-clear" />
              <span>Cloudy Clear</span>
            </label>
            <label htmlFor="quality-gummy">
              <input ref={(input) => (this.quality.gummy = input)} type="checkbox" name="quality-gummy" id="quality-gummy" />
              <span>Gummy</span>
            </label>
            <label htmlFor="quality-clear">
              <input ref={(input) => (this.quality.clear = input)} type="checkbox" name="quality-clear" id="quality-clear" />
              <span>Clear</span>
            </label>
            <label htmlFor="quality-lubricative">
              <input ref={(input) => (this.quality.lubricative = input)} type="checkbox" name="quality-lubricative" id="quality-lubricative" />
              <span>Lubricative</span>
            </label>
            <label htmlFor="quality-pasty">
              <input ref={(input) => (this.quality.pasty = input)} type="checkbox" name="quality-pasty" id="quality-pasty" />
              <span>Pasty</span>
            </label>
            <label htmlFor="quality-yellow">
              <input ref={(input) => (this.quality.yellow = input)} type="checkbox" name="quality-yellow" id="quality-yellow" />
              <span>Yellow</span>
            </label>
          </fieldset>
        </div>

        <div>
          <label htmlFor="frequency">Frequency</label>
          <select name="frequency" id="frequency" ref={(input) => (this.frequency = input)}>
            <option value="once">1x</option>
            <option value="twice">2x</option>
            <option value="thrice">3x</option>
            <option value="AD">AD</option>
          </select>
        </div>

        <div>
          <label htmlFor="intercourse">
            <input defaultChecked="false" type="checkbox" name="intercourse" id="intercourse" ref={(input) => (this.intercourse = input)} />
            <span>Intercourse?</span>
          </label>
        </div>


        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

export default graphql(createChartEntry, {
  name: 'createChartEntry', // adds the mutation to this.props
  options: {
    refetchQueries: ['ChartEntries']
  }
})(ChartEntryForm)