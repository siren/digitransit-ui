import React from 'react';
import moment from 'moment';

import Icon from './Icon';
import ComponentUsageExample from './ComponentUsageExample';

function EndLeg(props) {
  const modeClassName = 'end';
  return (
    <div key={props.index} className="row itinerary-row">
      <div className="small-2 columns itinerary-time-column">
        <div className="itinerary-time-column-time">
          {moment(props.endTime).format('HH:mm')}
        </div>
      </div>
      <div className={`leg-before ${modeClassName}`} >
        <div className={`leg-before-circle circle ${modeClassName}`} />
        <div className="itinerary-icon-container">
          <Icon img="icon-icon_mapMarker-point" className="itinerary-icon to to-it" />
        </div>
      </div>
      <div onClick={props.focusAction} className="small-10 columns itinerary-instruction-column to end">
        <div className="itinerary-leg-first-row">
          {props.to}
          <Icon img="icon-icon_search-plus" className="itinerary-search-icon" />
        </div>
      </div>
    </div>
  );
}

EndLeg.description = () => {
  const endTime = moment().hour(12).minute(34).second(0)
                          .valueOf();
  return (
    <div>
      <p>Displays an itinerary end leg.</p>
      <ComponentUsageExample>
        <EndLeg endTime={endTime} to="Veturitie" index={3} focusAction={() => {}} />
      </ComponentUsageExample>
    </div>
  );
};

EndLeg.propTypes = {
  endTime: React.PropTypes.number.isRequired,
  to: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  focusAction: React.PropTypes.func.isRequired,
};

export default EndLeg;
