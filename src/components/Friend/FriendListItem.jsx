import propTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = props => {
  return (
    <li className={css.item}>
      <span className={props.isOnline ? css.online : css.offline}></span>
      <img
        className={css.avatar}
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{props.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  isOnline: propTypes.bool,
};
