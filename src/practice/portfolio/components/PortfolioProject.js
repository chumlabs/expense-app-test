// IMPORTS
// - libraries
import React from 'react';

const PortfolioProject = props => {
  console.log(`PortfolioProject props: `, props);
  return (
    <div>
      <h2>A Project You'll Like</h2>
      <p>Here is project {props.match.params.project}</p>
    </div>
  );
};

export default PortfolioProject;
