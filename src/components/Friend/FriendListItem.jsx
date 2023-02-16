import propTypes from 'prop-types';

export const FriendListItem = props => {
  return (
    <li className="item">
      <span className="status">{props.isOnline}</span>
      <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
      <p className="name">{props.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  isOnline: propTypes.bool,
};
