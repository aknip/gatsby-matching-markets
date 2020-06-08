import React from 'react';
import PropTypes from 'prop-types';


import {Children } from './styles';

export default function Layout({
  children,
  disableTableOfContents,
  title,
  headings,
}) {
  
  return (
    <>
      TEST:<Children hasTitle={title}>{children}</Children>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  disableTableOfContents: PropTypes.bool,
  title: PropTypes.string,
  headings: PropTypes.array,
};

Layout.defaultProps = {
  disableTableOfContents: false,
  title: '',
  headings: null,
};
