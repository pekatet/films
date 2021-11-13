import './App.css';
import {PropTypes} from 'prop-types'
import React from 'react';
import Star from './Star';

function Stars ({count}) {
  let stars = []
  for (let i = 0; i < count; i++) {
    stars.push(<Star key={i}/>)
  }
  return (
    <div>
      {count > 0 && count < 6 && <ul className="card-body-stars">
        <li>
          {stars}
        </li>
      </ul>}
    </div>
  )
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number
}

export default Stars;