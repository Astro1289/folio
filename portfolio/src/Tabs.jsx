import React from 'react';
import './Tabs.css';

const Tabs = ({ onChange }) => {
  return (
    <div className="tabs">
      <div className="tab" onClick={() => onChange('all')}>All</div>
      <div className="tab" onClick={() => onChange('about')}>About</div>
      <div className="tab" onClick={() => onChange('work')}>Work</div>
    </div>
  );
};

export default Tabs;