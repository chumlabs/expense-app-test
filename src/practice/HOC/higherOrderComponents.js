// Higher Order Components
// - is a component that renders another component
// - advantages:
// -- reuse code
// -- render hijacking
// -- prop manipulation
// -- abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// standard component
const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// higher-order components
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Dissemination will be punished!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>You are not authorized to view this tantalizing info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="info is Here" />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="this is the tantalizing info" />,
  document.getElementById('root')
);
