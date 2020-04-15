import React, { FunctionComponent } from "react"

import Project from "../project/project"
import { ProjectType } from "../project/projectTypes"
import ben from "@assets/images/profile.jpg"
import styles from "./cvWrapper.module.css"
import Button from "../../atoms/button/button"
import { previewPDF, savePDF } from "../../helpers/cvPDF"

export type Projects = {
  edges: ProjectType[]
}

export type AuthorType = {
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

type CvWrapperPropsType = {
  projects: Projects,
  author: AuthorType
}


const CvWrapper: FunctionComponent<CvWrapperPropsType> = ({ projects, author }) => {
  
  const handleClick = () => savePDF(author, projects)

  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <div className={styles.introLeft}>
          <h2 className={styles.introTitle}>{author.name}</h2>
          <table className={styles.introHighlights}>
            <tbody>
              <tr>
                <td>Email: </td>
                <td>{author.email}</td>
              </tr>
              <tr>
                <td>Telephone: </td>
                <td>{author.telephone}</td>
              </tr>
              <tr>
                <td>Location: </td>
                <td>{author.location}</td>
              </tr>
              <tr>
                <td>Birthdate: </td>
                <td>{author.dateOfBirth}</td>
              </tr>
              <tr>
                <td>Rate: </td>
                <td>{author.rate}</td>
              </tr>
              <tr>
                <td>Hobbies: </td>
                <td>{author.hobbies}</td>
              </tr>
            </tbody>
          </table>
          <button className={`${styles.introContactButton} ${author.available ? styles.green : styles.red}`}>
            {author.available ? `I am available for new work` : `I'm not available for new work`}
          </button>
        </div>
        <div className={styles.introImageWrapper}>
          <img className={styles.thumbnail} src={ben} alt="Ben Eisenberg" />
        </div>
      </div>
      <iframe src={previewPDF(author, projects)} height="500" width="400"></iframe>
      <h2 className={styles.experienceTitle}>Work experience</h2>
      {projects && projects.edges.map(({ node }) => (
        <Project node={node} key={node._id} />
      ))}
      <Button title="Save PDF" onClick={handleClick} />
    </div>
  )
}

export default CvWrapper
