import * as React from "react"
import { HeadFC } from "gatsby"
import BreakpointProvider from "../providers/BreakpointProvider"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { StaticImage } from "gatsby-plugin-image"
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

const renewalProcess = () => {
  return (
    <BreakpointProvider value={'large'}>
      <Header />
      <Main>
        <Hero>
          <StaticImage
            src="../images/renewalProcess.jpeg"
            alt="hero"
            layout="fullWidth"
          />
        </Hero>
        <Section>
          <li>Current awardees who are eligible will automatically receive a renewal form each May via email. You should not submit a new online
            application. Please inform us if your primary email address changes.</li>
          <li> You are eligible for a maximum scholarship value of:
            <ul>
              <li>$12,000 if originally awarded entering your freshman year ($3,000 per year for four years)</li>
              <li>$9,000 if originally awarded entering your sophomore year ($3,000 per year for three years)</li>
              <li>$6,000 if originally awarded entering your junior year ($3,000 per year for two years)</li>
              <li>$3,000 if originally awarded entering your senior year (A single payment of $3,000)</li>
            </ul>
          </li>
          <li> College seniors continuing their undergraduate studies into a 5th year who have not previously received 4 years/$12,000 in scholarship
          support, may be eligible for one additional year support based on the circumstances and at the Program's sole discretion.</li>
          <li> This additional support will be limited to $1,500 per semester for a maximum of $3,000 and may not exceed scholarship support beyond
            a 5th year of undergraduate study.</li>
          <li> Students transferring to a different school will remain eligible as long as the transfer school is an accredited/recognized institution.</li>
          <li> Awardees must maintain a GPA of 3.0 or higher on a 4.0 scale and are required to complete a sufficient number of college credit hours
            each year to complete degree requirements within the normal time period.</li>
        </Section>
      </Main>
      <Footer />
    </BreakpointProvider>
  )
}

export default renewalProcess

export const Head: HeadFC = () => <title>Renewal Process</title>