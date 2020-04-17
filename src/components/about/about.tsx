import React, { FunctionComponent, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import WhatsApp from "@atoms/whatsapp/whatsapp"
import Github from "@atoms/github/github"
import Email from "@atoms/email/email"
import LinkedIn from "@atoms/linkedIn/linkedIn"
import { TSiteMetaData } from "../../atoms/seo/seoTypes"

import styles from "./about.module.css"

type TStaticQuerySite = {
  site: {
    siteMetadata: TSiteMetaData
  }
}

const mediaList: string[] = ['telNo', 'email', 'github', 'linkedIn']

const renderMediaTrigger = (media: string) => {
  switch (media) {
    case "telNo":
      return "have a chat"
    case "email":
      return "send an email"
    case "github":
      return "check my github"
    case "linkedIn":
      return "connect on LinkedIn"
  }
}

const renderMedia = (media: string) => {
  switch (media) {
    case "telNo":
      return <WhatsApp hideIcon className={styles[media]} />
    case "email":
      return <Email hideIcon className={styles[media]} />
    case "github":
      return <Github hideIcon className={styles[media]} />
    case "linkedIn":
      return <LinkedIn hideIcon className={styles[media]} />
  }
}

const About: FunctionComponent = () => {
  const { site: { siteMetadata } }: TStaticQuerySite = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
            author
          }
        }
      }
    `)

    const [media, setMedia] = useState(0)
    
    const changeMedia = () => setMedia(media === mediaList.length -1 ? 0 : media+1)

  return (
    <section className={styles.about}>
    <h1 className={styles.title}>About me</h1>
    <p className={styles.intro}>
      <span>{`Hi my name is ${siteMetadata.author}`}<b>(No sh*t)</b>.</span>
      <span>I'm a software developer settled in <b>Amsterdam</b>.</span>
      <span>I build <b>fun</b>, <b>flexible</b> and <b>scalable</b> applications.</span>
      <span>
        Want to <b>find out more</b>{`, or `}
        <span onClick={changeMedia} className={`${styles[mediaList[media]]} ${styles.smooth}`}>
          {renderMediaTrigger(mediaList[media])}
        </span>
        ?
      </span>
      <span>
        <b>Contact me</b>
        {` at `}
        <span >{renderMedia(mediaList[media])}</span>
      </span>
    </p>
  </section>
)}

export default About
