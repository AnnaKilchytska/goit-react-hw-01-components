import propTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = props => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={props.avatar} className={css.avatar} alt={props.username} />
        <p className={css.name}>{props.username}</p>
        <p className={css.info}>@{props.tag}</p>
        <p className={css.info}>{props.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{props.stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{props.stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.object.isRequired,
};
