import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from './layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Postado: {node.frontmatter.date}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          title
          date(formatString: "D/MM/yyyy")
        }
        id
        body
      }
    }
  }
`

export default BlogPage
