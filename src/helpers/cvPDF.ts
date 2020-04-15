import jsPDF from "jspdf"
// import { renderToString } from "react-dom/server"
import { AuthorType, Projects } from "../components/cv/cvWrapper"
import image from "./ben-avatar"

// const string = renderToString(<Prints />)
// const pdf = new jsPDF()
// pdf.fromHTML(string)

let cvPDF: jsPDF

// A4 PDF size: 210 × 297
const createPDF = (author: AuthorType, projects: Projects) => {
  cvPDF = new jsPDF({
    // orientation: "landscape",
  })

  // HEADER START
  cvPDF.setFontSize(14)
  // header left
  cvPDF.setFontStyle("bold")
  cvPDF.text(20, 20, author.name)
  cvPDF.setFontStyle("none")
  cvPDF.text(20, 28, "Full-stack Software Engineer")
  cvPDF.text(20, 36, "Specialised: Frontend ReactJS")

  // header center
  cvPDF.addImage(image, "JPEG", 91, 10, 28, 28)

  // header right
  cvPDF.text(190, 20, author.email, {
    align: "right",
  })
  cvPDF.text(193, 28, author.telephone, {
    align: "right",
  })
  cvPDF.text(190, 36, "github: github.com/beniceberg", {
    align: "right",
  })
  // HEADER END

  // EDUCATION START

  cvPDF.text(105, 44, "EDUCATION", {
    align: "center",
  })
  cvPDF.line(20, 46, 190, 46)

  // EDUCATION END

  return cvPDF
}

export const previewPDF = (author: AuthorType, projects: Projects) => {
  const doc = cvPDF || createPDF(author, projects)

  // Create preview
  const blobPDF = new Blob([doc.output("blob")], { type: "application/pdf" })
  const blobUrl = URL.createObjectURL(blobPDF)
  return blobUrl
}

export const savePDF = (author: AuthorType, projects: Projects) => {
  const doc = cvPDF || createPDF(author, projects)

  // Save the PDF
  doc.save("Ben_Eisenberg_Curriculum_Vitae.pdf")
  return
}
