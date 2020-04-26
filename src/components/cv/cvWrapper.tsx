import React, { FunctionComponent } from "react"

import Project from "../project/project"
import { ProjectType } from "../project/projectTypes"
import ben from "@assets/images/profile.jpg"
import styles from "./cvWrapper.module.css"
import Image from "../../atoms/image"
import { calculateAge } from "../../helpers/helpers"

type CvWrapperPropsType = {
  projects: {
    edges: ProjectType[]
  },
  author: {
    id: string
    name: string
    telephone: string
    location: string
    hobbies: string
    email: string
    dateOfBirth: string
    available: boolean
    image: any
  }
}

const CvWrapper: FunctionComponent<CvWrapperPropsType> = ({ projects, author }) => {

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
                <td>Age: </td>
                <td>{calculateAge(author.dateOfBirth)}</td>
              </tr>
              {/* <tr>
                <td>Rate: </td>
                <td>{author.rate}</td>
              </tr> */}
              <tr>
                <td>Hobbies: </td>
                <td>{author.hobbies}</td>
              </tr>
            </tbody>
          </table>
          {/* <button className={`${styles.introContactButton} ${author.available ? styles.green : styles.red}`}>
            {author.available ? `I am available for new work` : `I'm not available for new work`}
          </button> */}
        </div>
        <div className={styles.introImageWrapper}>
          <Image fixes image={author.image.asset.fixed} />
          {/* <img className={styles.introImage} src={ben} alt="Ben Eisenberg" /> */}
        </div>
      </div>
      <h2 className={styles.experienceTitle}>Work experience</h2>
      {projects && projects.edges.map(({ node }) => (
        <Project node={node} key={node._id} />
      ))}
    </div>
  )
}

export default CvWrapper
