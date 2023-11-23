import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <>
    <p>{message}</p>
  </>
);

Notification.PropTypes = {
  message: PropTypes.string.isRequired,
};
