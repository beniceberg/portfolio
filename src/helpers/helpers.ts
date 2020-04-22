import { format } from "date-fns"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder({
  projectId: process.env.SANITY_PROJECT_ID || "8ts0z0f2",
  dataset: process.env.SANITY_DATASET || "site",
})

export const mapEdgesToNodes = (data: any) => {
  if (!data.edges) return []
  return data.edges.map((edge: any) => edge.node)
}

export const getBlogUrl = (publishedAt: string, slug: string) => {
  return `${format(new Date(publishedAt), "yyyy/MM")}/${slug}/`
}

export const urlFor = (source: string) => {
  return builder.image(source)
}

export const normalizeTelNo = (telNo: string) =>
  telNo.replace(/^(\D*)(0+)|\((.*?)\)|[+ \-]/g, "")

/**
 *
 * @param dob Date of birth | format "YYYY-MM-DD"
 * @returns number age
 */
export const calculateAge = (dob: string) => {
  const dobDate = new Date(dob)
  const nowDate = new Date()
  return (
    nowDate.getFullYear() -
    dobDate.getFullYear() -
    (nowDate.getMonth() < dobDate.getMonth()
      ? 1
      : nowDate.getDate() < dobDate.getDate()
      ? 1
      : 0)
  )
}
