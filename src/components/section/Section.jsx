import React from 'react';
import PropTypes from 'prop-types';
import css from './section.module.css';

export const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2 className={css.title}>{title}</h2>
    {children}
  </section>
);

Section.PropTypes = {
  title: Proptypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
