import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3 fw5'>
        {`${name}, your current entry count is: ${entries}`}
      </div>
    </div>
  );
}

export default Rank;