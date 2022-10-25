import * as React from "react"
import { Link, HeadFC } from "gatsby"
import BreakpointProvider from "../providers/BreakpointProvider"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"


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

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 34px);
  box-shadow: 0px 0px 10px rgba(155,155,155,0.2);
  border: 1px solid rgba(155,155,155,0.22);
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`

const programInformation = () => {
    return (
        <BreakpointProvider value={'large'}>
            <Header />
            <Main>
                <Hero>
                    <StaticImage
                        src="../images/programInformation.jpeg"
                        alt="hero"
                        aspectRatio={18 / 9}
                        height={500}
                    />
                    <HeroText><h2>Program Information</h2></HeroText>
                </Hero>
                <Section id="eligibility">
                    <h3>Eligibility</h3>
                    <ul>
                        <li>
                            The applicant's parent, stepparent or legal guardian must be employed as a full-time employee of Dover Corporation, or one of its
                            operating companies world-wide on February 21, 2023 and who has worked for Dover for a least one year of continuous service in the
                            previous five years. Further:
                            <ul>
                                <li>Employees and spouses of employees are not eligible</li>
                                <li>Children of Dover Foundation's Board of Directors and/or participants in Dover Corporation's Long Term Incentive Program
                                    (LTIP) are also ineligible for this program.</li>
                            </ul>
                        </li>
                        <li>
                            Applicants must be:
                            <ul>
                                <li>In their final year of high school with a minimum cumulative grade point average (GPA) of 2.0 on a 4.0 scale, or</li>
                                <li>enrolled in an undergraduate program at an accredited college/university or vocational school with a minimum college GPA of
                                    3.0 on a 4.0 scale.</li>
                                <li>Students studying outside the US must be attending a recognized and respected institution and able to show a comparable
                                    academic achievement through test scores or other academic records.</li>
                            </ul>
                        </li>
                        <li> Eligible applicants must be 24 years of age or younger (exception for military duty) as of February 21, 2023.</li>
                    </ul>
                </Section>
                <Section id="rules">
                    <h3>Rules and Regulations</h3>
                    <ul>
                        <li>Completing this application does not guarantee that you will receive the scholarship</li>
                        <li>Scholarships are for undergraduate studies only and will not extend beyond the year in which an undergraduate/baccalaureate degree is earned.</li>
                        <li>The Dover Scholars Program reserves the right to define undergraduate education as the first eight semesters of post-secondary education prior to earning a degree.</li>
                        <li>Awardees must be enrolled as full-time college students at an accredited/recognized institution for the fall of 2023 to receive a scholarship payment.</li>

                        <li>The maximum scholarship to be received in any academic year is $3,000.</li>
                        <li>The funds provided must be used only for educational expenses (e.g., tuition, books and fees).</li>
                        <li>Scholarship payments will be disbursed each July, made payable to the school, and mailed or wired directly to the institution.</li>

                        <li>It is the intent of the Dover Foundation to avoid granting a student financial aid in excess of educational expenses</li>
                        <li>Depending on your country's tax laws, financial aid in excess of actual educational expenses may result in taxable income to the recipient and possible reduction of other financial aid by their college.</li>

                        <li>Scholarship recipients are not required to accept employment with Dover Corporation or any of its affiliates upon graduation.</li>
                        <li>The administration and financing of this program is exclusively the responsibility of The Dover Foundation, which has full authority to
                            make rules and regulations governing the program and to make final decisions in all matters arising in connection therewith except for
                            the selection of scholarship recipients.</li>
                        <li>The Foundation may modify or discontinue the program at anytime.</li>
                    </ul>
                </Section>
                <Section id="selection">
                    <h3>Selection Process</h3>
                    <ul>
                        <li>Selections are made by an impartial, outside committee comprised of college admissions professionals from prominent universities.</li>
                        <li>No representatives of Dover Corporation or The Dover Foundation are involved in the selection process.</li>
                        <li>No preference is accorded to an applicant by reason of a parent's position or length of employment.</li>
                        <li>Consideration for all awards is based on the applicant's academic record, activities and leadership abilities. Extra consideration is given
                            to applicants pursing science, technology, engineering or mathematics (STEM) fields of study.</li>
                        <li>All scholarship winners will be individually notified by email of the committee's decision no later than April 28, 2023. Winners will be
                            posted on the website by May 5, 2023.</li>
                    </ul>
                </Section>
                <Section id="applicationProcess">
                    <h3>Application Process</h3>
                    <ul>
                        <li>The online application will be available beginning November 18, 2022 through February 21, 2023.</li>
                        <li>
                            A complete application, in English, must be submitted by February 21, 2023 and include:
                            <ul>
                                <li>the online application</li>
                                <li>employment verification form</li>
                                <li>academic record form</li>
                                <li>recommender form</li>
                            </ul>
                        </li>
                        <li>Instructions are provided on each form.</li>
                    </ul>
                    <a href="">Apply Here</a>
                </Section>
                <Section id="contact">
                    <h3>Contact Us</h3>
                    <p>For program questions or technical support:<br/><br/>
                        info@doverfoundation.org<br/>
                        630-428-2412<br/>
                        Dover Scholars Program<br/>
                        PO Box 648<br/>
                        Naperville, IL 60565<br/>
                        USA
                    </p>
                </Section>
            </Main>
        </BreakpointProvider>
    )
}

export default programInformation

export const Head: HeadFC = () => <title>Program Information</title>
