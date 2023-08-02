import PropTypes from 'prop-types';
import css from './Section.module.css';


const Section = ({ title, children }) => {
    return (
        <section>
            <h2 className={css.text_header}>{title}</h2>    
            {children}
        </section>
    )
}

Section.ProtoTypes={
title: PropTypes.string.isRequired,
chldren:PropTypes.node.isRequired,
}

export default Section;
