
Start mit 
docker-compose up

Dann im Browser
http://localhost:8000
http://localhost:8000/___graphql

- Startet Gatsby mit gatsby develop

Terminal-/Shellaufruf:
- docker-compose exec gatsby sh
- Editor mit 
	vi package.json (Exit mit :q)

1.
Transitions / Animationen ergänzt
=> https://github.com/AndreasFaust/gatsby-plugin-transitions
=> Klappt. ACHTUNG - Beispiel-Config NICHT aus github-readme nehmen, sondern direkt aus Repo!
	"react-spring": "^8.0.27",
    "gatsby-plugin-layout": "^1.1.18",
    "gatsby-plugin-transitions": "^2.1.6",


2.
Felder in Frontmatter ergänzt
gatsby-nodes.js
Müssen bei .mdx Artikeln im Schema explizit ergänzt werden
=> https://www.gatsbyjs.org/docs/schema-customization/#fixing-field-types


Quelle:
https://github.com/Rocketseat/gatsby-starter-rocket-docs
https://github.com/Rocketseat/gatsby-themes/tree/master/%40rocketseat/gatsby-theme-docs




Notes:
query MyQuery {
  mdx(frontmatter: {}) {
    id
  }
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        mytest
      }
    }
  }
}
