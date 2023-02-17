import propTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

FriendList.propTypes = {
  children: propTypes.node,
};
