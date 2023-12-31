import React from 'react';
// import ReactDOM from 'react-dom/client';

import './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id} className="item">
            <span className="label">{stat.label} </span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
