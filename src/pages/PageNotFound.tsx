import React from 'react';
import { useRouteError } from 'react-router-dom';

const PageNotFound = () => {
  const error = useRouteError();
  console.log('router err', error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an expected error has occurred.</p>
      <p>
        {
          // @ts-ignore
          <i>{error.statusText || error.message}</i>
        }
      </p>
    </div>
  );
};

export default PageNotFound;
