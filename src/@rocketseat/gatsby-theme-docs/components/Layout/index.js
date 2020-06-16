import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TableOfContents from '@rocketseat/gatsby-theme-docs/src/components/Docs/TOC';
import Sidebar from '@rocketseat/gatsby-theme-docs/src/components/Sidebar';
import Header from '@rocketseat/gatsby-theme-docs/src/components/Header';
import { Wrapper, Main, Title, Children } from '@rocketseat/gatsby-theme-docs/src/components/Layout/styles';

export default function Layout({
  children,
  disableTableOfContents,
  title,
  headings,
  isHomepage,
}) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const disableTOC =
    disableTableOfContents === true || !headings || headings.length === 0;

  function handleMenuOpen() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {/* conditional component */}
      {isHomepage == false &&
          <Sidebar isMenuOpen={isMenuOpen} isHomepage={isHomepage} />
      }
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
  isHomepage: PropTypes.bool,
};

Layout.defaultProps = {
  disableTableOfContents: false,
  title: '',
  headings: null,
  isHomepage: false,
};
