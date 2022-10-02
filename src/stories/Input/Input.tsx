import React, { forwardRef } from 'react';
import className from 'classnames/bind';
import styles from './input.module.scss';

interface Props extends React.HTMLProps<HTMLInputElement> {
  direction?: 'row' | 'column';
  border?: 'circle' | 'square';
  primary?: string;
  label?: string;
  error?: string;
}

const cx = className.bind(styles);

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    direction = 'column',
    border = 'circle',
    primary,
    label = '',
    error = '',
    ...rest
  } = props;

  return (
    <div className={cx('form-group', direction)}>
      <p className={cx('form-label')}>{label}</p>
      <input className={cx('form-control', border)} {...rest} ref={ref} />
      <span className={cx('form-error')}>{error}</span>
    </div>
  );
});

export default Input;
