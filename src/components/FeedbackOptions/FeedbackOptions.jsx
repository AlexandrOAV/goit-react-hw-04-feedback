import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (  
    <section>
            <ul className={css.list}>
 {options.map(option => {
     return (
     <li key={option} >
     <button type="button" onClick={() => onLeaveFeedback(option)} >
         {option}
     </button>
     </li>
    )
})}
       </ul>
    </section>

   )   
} 
FeedbackOptions.ProtoType = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}
export default FeedbackOptions;