import React from 'react';
import cx from 'classnames';

import ComponentUsageExample from '../documentation/ComponentUsageExample';

const Labeled = ({ children, onClick, className, label, showLabel }) => (
  <span
    className={cx(onClick ? 'cursor-pointer' : undefined, 'labeled', className)}
    onClick={onClick}
  >
    <div className="labeled-item">{children}</div>
    {showLabel ? <div className="labeled-label">{label}</div> : undefined}
  </span>
);


Labeled.propTypes = {
  label: React.PropTypes.node.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func,
  showLabel: React.PropTypes.bool,
  className: React.PropTypes.string,
};

const exampleLabel = <span>'Example label'</span>;

console.log(exampleLabel);

Labeled.description = (
  <div>
    <p>
      This component wraps other components into a labeled component.
    </p>
  </div>
);

export default Labeled;