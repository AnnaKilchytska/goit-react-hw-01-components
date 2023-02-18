import propTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={css.list}>
        {stats.map(item => {
          return (
            <li
              key={item.id}
              className={css.item}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: propTypes.array,
};
