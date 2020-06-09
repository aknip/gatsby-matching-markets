

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MdxFrontmatter @dontInfer {
      title: String!
      description: String
      image: String
      mytest: String
      date: Date
      disableTableOfContents: Boolean
    }
  `);

};


