import * as React from "react"
import { HeadFC } from "gatsby"
import BreakpointProvider from "../providers/BreakpointProvider"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import styled from "styled-components"
import "../styles/reset.css"
import "../styles/index.css"
import Footer from "../components/Footer"
import Section from "../components/Section"

const HeroText = styled.div`
  position: absolute;
  background-color: rgba(255,255,255,0.8);
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  bottom: 10px;
  right: 10px;
  padding:  8px;
  box-shadow: 0px 0px 10px rgba(155,155,155,0.2);
  border: 1px solid rgba(155,155,155,0.22);
  @media (max-width: 768px) {
    position: relative;
    max-width: 100%;
    right: 0;
    bottom: 0;
  }
`

const Hero = styled.div`
  position: relative;
`

const Privacy = () => {
    return (
        <BreakpointProvider value={'large'}>
            <Header />
            <Main>
                <Section>
                    <h3>Privacy Policy of The Dover Foundation</h3>
                    <h5>(Effective 11/10/11)</h5>
                    <p>The Dover Foundation ("Foundation") respects your individual privacy.  This Privacy Policy puts you in control of how your personal information is used in connection with our web site, <a href="www.doverfoundation.org">www.doverfoudation.org</a> ("Foundation Web Site").  This Privacy Policy describes how we collect, use, and share personal and non-personal information we obtain from users of the Foundation Web Site.  This Privacy Policy only applies to the Foundation Web Site.  By using the Foundation Web Site, you agree to this Privacy Policy.</p>
                    <p>This Privacy Policy is complemented by our Terms of Use available at <a href="http://www.doverfoundation.org/terms.cfm">http://www.doverfoundation.org/terms.cfm</a>. </p>
                    <p>This is the website of</p>
                    <p>The Dover Foundation<br />3005 Highland Parkway<br />Suite 200<br />Downers Grove, IL 60515</p>
                    <p>We can be reached via e-mail at info@doverfoundation.org or you can call us at 630-541-1540.</p>
                    <h3>What we collect</h3>
                    <p>We may collect the following information:</p>
                    <p>(i) "Personal Information" – that is, information such as your full name, email address, mailing address, telephone number, and date of birth/age;</p>
                    <p>(ii) "Non-Personal Information" – that is, information about you or your activities through which you cannot be personally identified;</p>
                    <p>(iii)  "Application Information" – that is, information related to a scholarship application (e.g., for The Dover Sons and Daughters Scholarship Program) which includes both Personal Information and Non-Personal Information of scholarship applicants, their parents/legal guardians, school officials, and others (e.g., information included on submitted Application Form, Dover Employee Verification Form, Transcript Form, Reference Form and other related forms); and/or </p>
                    <p>(iv) Information related to customer surveys, promotions, and/or offers which may be Personal Information and/or Non-Personal Information (e.g., preferences, demographics, interests, etc.).</p>
                    <p>In situations where it is possible to do so, Non-Personal Information (as well as publicly available information) may be linked to Personal Information.</p>
                    <p>We may collect Personal and Non-Personal information from users of the Foundation Web Site.  We may also obtain such information from third parties.
                    </p>
                    <p><h3>What we do with the information we gather</h3></p>
                    <p>We require the information that we gather for various reasons including the following:  (i) to administer and conduct scholarship programs (e.g., to identify potential scholarship recipients and to provide scholarship-related services); (ii) to understand your needs, provide you with a better service, and respond to your inquiries; (iii) for internal record keeping; (iv) for internal analysis; and (v) to administer promotions, services, and offers for which you provided Personal Information and/or Non-Personal Information.  Subject to the provisions below, we may also use this information for other marketing-related purposes.</p>
                    <p>With respect to Application Information:</p>
                    <p><u>(i) Scholarship Applications and Related Materials.</u> As part of the application process, the Foundation requires prospective applicants, their parents/legal guardians and third parties (e.g., school officials) to provide their names, addresses, dates of birth, telephone numbers, email addresses and/or other Personal Information and Non-Personal Information.  The Foundation collects this information in order to contact prospective applicants and/or their parents/legal guardians, and to evaluate whether an applicant will receive any scholarship funds.  This data is collected via our online application system. Access to the system is restricted to current Foundation personnel and designated third party contractors and evaluators responsible for administrative matters associated with the scholarship program (e.g., reviewing and accessing submitted applications).  Application Information submitted on certain forms may be shared with affiliated businesses and companies (and their designated employees) of the Foundation (which includes all affiliates and operating companies of Dover Corporation) solely to assess a scholarship application (e.g., Dover Employee Verification Forms sent to the Human Resources Department of the appropriate Dover company to verify employment of applicant's parent/legal guardian).  For those third party individuals who are assisting in the selection process, all copies of documents are removed by Foundation personnel (and/or their designees) and copies destroyed after they complete their service to the Foundation.  The application forms are destroyed by the Foundation after two years if the applicant is not selected as a scholarship recipient. To the extent that you provide us with certain Personal Information through other means (e.g., you send us an email inquiry about the program and your inquiry contains your complete name, email address and date of birth), such information is not subject to this paragraph (i) and paragraph (ii) of the Privacy Policy governing "Application Information" (e.g., such information will not be destroyed after two years). Nothing herein shall restrict the Foundation's ability to maintain records, summaries and analysis of Application Information (e.g., annual, aggregated summaries of applications, etc.) beyond this two year period as long as such information is not associated with the Personal Information of an individual applicant or parent/legal guardian.</p>
                    <p><u>(ii) Scholarship Recipients.</u>  The Foundation retains the application forms of students selected as scholarship recipients.  This data remains on the Foundation's servers and is accessible only to current Foundation personnel unless the Foundation, in its sole discretion, decides to destroy such information.  Scholarship recipients (and/or their parents/legal guardians) may also be required to provide Social Security Numbers to facilitate payment of scholarship funds.  However, a Social Security Number is never added to the online record associated with an application. If obtained, this number is kept securely at the Foundation's offices. The name, brief biography, one or more photographs, and/or undergraduate/vocational/post-secondary institution of each scholarship recipient may, in the Foundation's sole discretion, be posted on the Foundation Web Site.</p>
                    <p>Subject to the restrictions above (which apply only to Application Information), we may share your Personal Information with our affiliates or with unrelated third parties (including contractors who provide services to us) to assist with any of the uses of Personal and Non-Personal Information described herein. For example, we may share and/or provide your Personal Information and Non-Personal Information with/to third parties that assist with the operation, administration, or maintenance of our site. The privacy policies of such third parties may also apply.  We may also disclose your Personal Information and Non-Personal Information to third parties if disclosure is required to comply with applicable laws or regulations; or if disclosure is necessary to enforce our Privacy Policy and/or Terms of Use, to protect your safety or security, or the safety and security of our site or third parties.</p>
                    <p>We may use the information to improve our products and services, and to measure the number of visitors to the Foundation Web Site and the areas of the Web Site that are of most interest to visitors.</p>
                    <p>We may use the information to customize the web site. </p>
                    <p>We may contact you by email, phone, fax, mail, or other means unless you direct us not to do so.</p>
                    <p>We may use your Personal Information and Non-Personal Information for our own marketing purposes, including, but not limited to notifying you of new services, offers or other information via mail, email, telephone, text message, and other means.  If you do not want us to use your Personal Information for marketing purposes, you may opt-out of such uses by notifying us in accordance with the procedure set forth below under the heading, "Controlling your Personal Information."</p>
                    <p>We may share your Personal Information and Non-Personal Information with our affiliated businesses and companies (which includes all affiliates and operating companies of Dover Corporation) (collectively, "Foundation Affiliates") for any purpose.  If you do not want us to share your Personal Information with Foundation Affiliates for marketing purposes, you may opt-out of such uses by notifying us in accordance with the procedure set forth below under the heading, "Controlling your Personal Information."  Although you may request to opt-out of sharing your Personal Information for marketing purposes, we may share Personal Information with Foundation Affiliates for non-marketing purposes.</p>
                    <p>We may share your Personal Information and Non-Personal Information with our business (and other) partners for joint marketing efforts, or for our business (and other) partners' own marketing purposes.  If you do not want us to share your Personal Information with such third parties for marketing purposes, you may opt-out of such uses by notifying us in accordance with the procedure set forth below under the heading, "Controlling your Personal Information."</p>
                    <p><h3>Security and Confidentiality</h3></p>
                    <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.  However, we undertake no obligation to maintain the confidentiality of non-confidential data such as feedback, questions, comments or ideas that you voluntarily provide to us.  We reserve the right to use and disclose such non-confidential information as we deem appropriate.  By voluntarily submitting feedback to us, you consent to these terms.</p>
                    <p><h3>Links to other web sites  </h3></p>
                    <p>Our website may contain links to enable you to visit other web sites of interest easily.  However, once you have used these links to leave our site, you should note that we do not have any control over that other web site. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this Privacy Policy. You should exercise caution and look at the privacy statement applicable to the web site in question.</p>
                    <p><h3>Controlling your Personal Information</h3></p>
                    <p>You may choose to restrict the collection or use of your Personal Information in the following ways:  </p>
                    <p>If you have previously not objected to us using your Personal Information for our direct marketing purposes, you may opt-out of receiving future marketing emails from us at any time by emailing us at info@doverfoundation.org with your opt-out request.</p>
                    <p>If you want to opt-out of any new uses of information permitted by this Privacy Policy caused by changes in our information practices, you may do so by emailing us at <a href="mailto:info@doverfoundation.org">info@doverfoundation.org</a> with your opt-out request.</p>
                    <p>If you do not want us to share your Personal Information with Foundation Affiliates and/or our business (and other) partners for marketing purposes, you may opt-out of such sharing by emailing us at info@doverfoundation.org with your opt-out request.</p>
                    <p>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, we will promptly correct any information found to be incorrect.</p>
                    <p>From time to time, we may use customer information for new, unanticipated uses not previously disclosed in our Privacy Policy. If our information practices change at some time in the future we will post the policy changes to our web site to notify you of these changes at which time, you will have the ability to opt-out of these new uses. If you are concerned about how your information is used, you should check back at our web site periodically.</p>
                    <p>If you do not want to be contacted by us in the future (unless you initiate the contact), please let us know by sending us an email to info@doverfoundation.org, writing us to the above address (located at the beginning of this Privacy Policy) or calling us at 630-541-1540.</p>
                    <p><h3>Persons Under 13</h3></p>
                    <p>The Foundation Web Site is not designed for persons under the age of 13.  Our scholarship programs are for post-secondary educational purposes (e.g., college, university, and vocational school) for students who are generally 17 years of age or older.  Therefore, we do not knowingly collect or allow the collection of Personal Information from, or related to, persons under the age of 13. If you are the parent or guardian of a person under the age of 13 and believe that the person has provided Personal Information to us, please contact us at info@doverfoundation.org.</p>
                    <p><h3>Business Transactions </h3></p>
                    <p>We may share or transfer your Personal and Non-Personal Information if the Foundation enters into, or is involved in, a business transaction such as a merger, acquisition, reorganization, or sale of some or all of its assets.</p>
                    <p><h3>Cookies </h3></p>
                    <p>When you visit the Foundation Web Site, we may use "cookies" and similar technologies to help us recognize and serve you better. Cookies are small files that contain information sent by a web site that is saved on your computer's hard drive. You may delete cookies from your computer or set your browser to reject cookies. However, doing so may limit some functionalities of our site.</p>
                    <p><h3>Visitors Outside of the United States</h3></p>
                    <p>We make no representation that the practices described in this Privacy Policy are compliant with laws outside of the United States including those that apply to the collection, security, use, and disclosure of Personal Information.</p>
                    <p style={{ textAlign: 'center' }}>&bull;&bull;&bull;</p>
                    <p>If you feel that this site is not following its stated information policy, you may contact us at the above email address, mailing address, or phone number.</p>
                </Section>
            </Main>
            <Footer />
        </BreakpointProvider>
    )
}

export default Privacy

export const Head: HeadFC = () => <title>Privacy Policy</title>
