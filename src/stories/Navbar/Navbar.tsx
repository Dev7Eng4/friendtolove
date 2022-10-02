import React from 'react';
import { renderClassName } from 'utils/createClassName';
import classNames from 'classnames/bind';
import styles from './navbar.module.scss';

type Props = {
  children: React.ReactNode;
  classes: string;
};

// const cx = renderClassName(styles);
const cx = classNames.bind(styles);

const Navbar = ({ children, classes }: Props) => {
  return <div className={cx('navbar')}>{children}</div>;
};

export default Navbar;
