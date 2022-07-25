import PropTypes from 'prop-types';
import css from './Statistics.module.css';



export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({id, label,percentage})=>(
           <li  key={id} className={css.item} style={{backgroundColor:`${'#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`}}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
        ))} 
      </ul>
    </section>
  )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf((PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))),
};