import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TableOfContents from '../Docs/TOC';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { Wrapper, Main, Title, Children } from './styles';

import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";


export default function Layout({
  location,
  children,
  disableTableOfContents,
  title,
  headings,
}) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const disableTOC =
    disableTableOfContents === true || !headings || headings.length === 0;

  function handleMenuOpen() {
    setMenuOpen(!isMenuOpen);
  }

  console.log('hi')
  console.log({location})
  return (
    <>
      <Sidebar isMenuOpen={isMenuOpen} />
      <Header handleMenuOpen={handleMenuOpen} isMenuOpen={isMenuOpen} />
      <Wrapper isMenuOpen={isMenuOpen}>
        {title && <Title>{title}</Title>}
        <Main disableTOC={disableTOC}>
          {!disableTOC && <TableOfContents headings={headings} />}
          <Children hasTitle={title}>{children}</Children>
        </Main>
      </Wrapper>
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
