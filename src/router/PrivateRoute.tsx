import { useAppSelector } from 'app/hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  component: React.FunctionComponent;
};

const PrivateRoute = (props: Props) => {
  const { component: Component, ...rest } = props;
  // const { isAuthentication } = useAppSelector((state) => true);
  const navigate = useNavigate();

  if (!true) {
    navigate('/login');
  }

  return <Component />;
};

export default PrivateRoute;
