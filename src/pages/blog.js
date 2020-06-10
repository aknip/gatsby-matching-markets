import React from 'react';
import { Link } from 'gatsby';
//import Layout from '../components/Layout/homepage-blog';  
//import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';

import './blogstyles.css'

const BlogPage = ({data}) => {
  console.log(data)
  return(
 
      <div>
        <div style={{outline: 'none'}} tabIndex={-1} role="group">
          <section className="bloglayout-module--layout false" style={{backgroundColor: 'inherit'}}>
            <header className="blogheader-module--header false">
              <nav className="blogheader-module--header__nav" role="navigation" aria-label="main navigation">
                <a aria-current="page" className="bloglink" href>
                  <h1 className="blogh1">Brevifolia</h1>
                </a>
                <div>
                  <h1 className="blogh1"><a className="bloglink" href>info</a></h1>
                </div>
              </nav>
            </header>
            <div className="bloglayout-module--content">
              <section>
                <section>
                  <ul className="blogul bloglist-module--list">
                    
                    {data.allMdx.edges.map(({node}) => (
                      <div>
                        <Link className="bloglink" to={node.fields.slug}>
                          <li>
                            <div className="bloglist-module--list__hero">
                              <div className="bloglist-image-wrapper">
                                <div style={{width: '100%', paddingBottom: '75%'}} />
                                <img src className="bloglist-image" alt="On the Geneology of Morals" />
                              </div>
                            </div>
                            <div className="bloglist-module--list__info">
                              <h2 className="blogh2">{node.frontmatter.title}</h2>
                              <h3 className="blogh3">{node.frontmatter.date}</h3>
                              <p className="bloglist-abstract">{node.excerpt}</p>
                            </div>
                          </li>
                        </Link>
                      </div>
                    ))}

                  </ul>

                </section>
              </section>
            </div>
          </section>
        </div>
      </div>
      
   
  )
}
export default BlogPage


// query for blogposts
export const  query = graphql`query HomePageQuery{
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD.MM.YYYY")
          title
        }
        timeToRead
        excerpt
      }
    }
  }
}`

