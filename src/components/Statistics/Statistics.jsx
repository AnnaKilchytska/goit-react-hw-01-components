import propTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className="title">{title && <h2>{title}</h2>}</h2>

      <ul className={css.list}>
        {stats.map(item => {
          return (
            <li key={item.id} className={css.item}>
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
