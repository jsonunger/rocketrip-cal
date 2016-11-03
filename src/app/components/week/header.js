import React, {PropTypes} from 'react';

export const Header = ({label}) => {
  return <span>{label}</span>;
};

Header.propTypes = {
  label: PropTypes.string
};
