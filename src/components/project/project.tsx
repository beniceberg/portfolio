import React, { FunctionComponent } from "react"

import { ProjectType, TagType } from "./projectTypes"
import styles from "./project.module.css"

const Project: FunctionComponent<ProjectType> = ({ node }) => {
  return (
    <div key={node._id} className={styles.role}>
      <div className={styles.roleHeader}>
        <div className={styles.roleCompany}>
          <b>{node.company}</b>
          {node.link && (
            <a
              className={styles.projectLink}
              href={node.link}
              target="_blank"
            >
              View website
            </a>
          )}
          <br />
          {node.role}
        </div>
        <div className={styles.roleDate}>
          <b>
            {node.dateInterval.start_date} - {node.dateInterval.end_date || 'Current'}
          </b>
          <br />
          {node.location}
        </div>
      </div>
      <ul className={styles.roleTaskList}>
        {node.tasks.map((task, index: number) => (
          <li key={`task-${index}`} className={styles.roleTask}>
            {task.description}
            {task.tags && task.tags.length && (
              <>
                <br />
                {task.tags.map((tag:TagType) => (
                  <span key={tag.slug.current} className={styles.tag}>
                    {tag.title}
                  </span>
                ))}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Project