import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"

import Layout from "@atoms/layout/layout"
import SEO from "@atoms/seo/seo"

import CvWrapper from "@components/cv/cvWrapper"
import { ProjectType } from "../components/project/projectTypes"

type CvPagePropsType = {
  data: {
    projects: {
      edges: ProjectType[]
    }
    author: {
      id: string
      name: string
      telephone: string
      rate: string
      location: string
      hobbies: string
      email: string
      dateOfBirth: string
      available: boolean
    }
  }
}

export const query = graphql`
  query MyCVQuery {
    projects: allSanityProject(sort: {fields: dateInterval___start_date, order: DESC }) {
      edges {
        node {
          _id
          company
          dateInterval {
            end_date(formatString: "MM/YYYY")
            start_date(formatString: "MM/YYYY")
          }
          location
          role
          tasks {
            description
            tags {
              title
              slug {
                current
              }
            }
          }
        }
      }
    }
    author: sanityAuthor(slug: {current: {eq: "ben-eisenberg"}}) {
      id
      name
      bio {
        list
      }
      telephone
      rate
      location
      hobbies
      email
      dateOfBirth(formatString: "DD MMMM YYYY")
      available
    }
  }
`

const CvPage: FunctionComponent<CvPagePropsType> = ({ data }) => {
  console.log("data in page", data)
  return (
    <Layout>
      <SEO
        title="Personal details and work experience"
        description="C.V. of freelance React and TypeScript developer in Utrecht, the Netherlands"
      />
      <CvWrapper 
        projects={data.projects}
        author={data.author}
      />
    </Layout>
  )
}

export default CvPage
