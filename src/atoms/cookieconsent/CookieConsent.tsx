import React, { FunctionComponent } from "react"
import CookieConsent from "react-cookie-consent"

const CC: FunctionComponent = () => (
  <>
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-analytics"
    >
      This site uses cookies ...
    </CookieConsent>
  </>
)

export default CC
