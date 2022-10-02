import { useAppDispatch } from 'app/hooks';
import React, { useRef } from 'react';
import Input from 'stories/Input/Input';

type Props = {};

const Login = (props: Props) => {
  const dispatch = useAppDispatch();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSignIn = () => {
    if (usernameRef.current && passwordRef.current) {
      // dispatch();
    }
  };

  return (
    <div>
      <form>
        <Input ref={usernameRef} />
        <Input ref={passwordRef} />

        <button onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
