import * as React from "react"
import "../styles/reset.css"
import "../styles/index.css"
import styled from "styled-components"
import BreakpointProvider from "../providers/BreakpointProvider"
import { Header } from "../components/Header"
import { StaticImage } from "gatsby-plugin-image"
import { Main } from "../components/Main"
import { Link, HeadFC } from "gatsby"
import Footer from "../components/Footer"
import { Seo } from "../components/GTag"

const doverBlue = 'rgb(0, 75, 141)'

const HeroText = styled.div`
  width: 25%;
  font-size: 26px;
  line-height: 38px;
  color: #ffffff;
  padding: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  @media (max-width: 420px) {
     width: 100%;
     font-size: 18px;
  }
`
  
const HeroImage = styled.div`
  display: flex;
  width: 75%;
  @media (max-width: 420px) {
    width: 100%;
 }
`
  
const Hero = styled.div`
  background-color: ${doverBlue};
  display: flex;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`

const Sections = styled.div`
  display: flex;
  padding: 16px;
  gap: 12px;
  justify-content: space-between;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`

const HomeNavBar = styled.div`
  display: flex;
  margin-right: auto;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 420px) {
    align-items: center;
    justify-content: center;
    margin-right: 0;
  }
`

const HomeNavLink = styled(Link)`
  background-color: ${doverBlue};
  color: white;
  padding: 8px 24px;
  text-decoration: none;
  border-radius: 24px;
  letter-spacing: 0.3px;
  font-size: 18px;
  font-weight: 200;
  width: 250px;
  text-align: center;
  transition: 300ms ease-in-out;
  :hover {
    background-color: rgba(24, 70, 139, 0.8);
    box-shadow: 1px 5px 5px rgba(155,155,155, 0.5);
  }
`

const HomeNavBlurb = styled.div`
  font-size: 26px;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  color: ${doverBlue};
  line-height: 42px;
`

const StyledMain = styled(Main)`
  background-color: white;
`

export const Head = () => (
  <Seo>
    <title>Dover Foundation</title>
  </Seo>
)

const IndexPage = () => {
  return (
    <>
      <BreakpointProvider value={'large'}>
        <Header />
        <StyledMain>
          <Hero>
            <HeroImage>
              <StaticImage
                src="../images/hero.jpeg"
                alt="hero"
              />
            </HeroImage>
            <HeroText>
              Now in its 15th year, The Dover Scholars Program has awarded 463 scholarships valued at nearly $3.5 million in financial support.
            </HeroText>
          </Hero>
          <Sections>
            <HomeNavBar>
              <HomeNavLink to="/programInformation">Program Information</HomeNavLink>
              <HomeNavLink to="/renewalProcess">Renewal Process</HomeNavLink>
              <HomeNavLink to="/news">News</HomeNavLink>
              <HomeNavLink to="/about">About the Dover Foundation</HomeNavLink>
              <HomeNavLink to="/programInformation#applicationProcess">Apply</HomeNavLink>
            </HomeNavBar>
            <HomeNavBlurb>
              The Dover Foundation is committed to supporting causes and programs that promote education and enhance the lives of Dover Company employees and their families. One such program is the Dover Scholars Program.  This is the premier program of the Dover Foundation and offers recurring/multi-year scholarships of up to $3,000 per year for a maximum of 4 years/$12,000 for undergraduate studies. 
            </HomeNavBlurb>
          </Sections>
        </StyledMain>
        <Footer />
      </BreakpointProvider>
    </>
  )
}

export default IndexPage