import * as React from 'react';

interface DateStringProps {
  timestamp?: number;
}

const DateString: React.FC<DateStringProps> = ({ timestamp }) => {
  if (!timestamp || timestamp === -1) {
    return null;
  }

  const date = new Date(timestamp);

  if (date.getFullYear() === 1970) debugger;

  return <span style={{ color: '#aaa' }}>{date.toLocaleString()}</span>
}

export default DateString;