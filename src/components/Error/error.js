import React from 'react';

const Error = (error) => (
  <div className = 'error'>
    <h1> Some error occurs </h1>
    <h1> {error} </h1>
  </div>
);

export default Error;