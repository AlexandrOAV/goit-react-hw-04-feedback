import css from './Statistics.module.css'
import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return ( 
        <section>
            <ul className={css.list}>
                <li className={css.item}>Good: <span>{good}</span></li>
                <li className={css.item}>Neotrel: <span>{neutral}</span></li>
                <li className={css.item}>Bad: <span>{bad}</span></li>
                <li className={`${css.total} ${css.item}`}>Total: <span >{total}</span></li>
                <li className={`${css.total} ${css.item}`}>Positive feedback: <span>{positivePercentage}</span>%</li>
            </ul>
        </section>);
};


Statistics.propTypes = {
good: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
positivePercentage: PropTypes.number.isRequired,
total: PropTypes.number.isRequired,
}

export  default Statistics;