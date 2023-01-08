import * as React from "react"
import { HeadFC, Link } from "gatsby"
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

const terms = () => {
    return (
        <BreakpointProvider value={'large'}>
            <Header />
            <Main>
                <Section>
                    <h3>Terms of Use</h3>
                    <p>These are the Terms of Use of The Dover Foundation. ("we," "our" or "us") applicable to http://www.doverfoundation.org ("Site").  The terms "you" and "your" herein refer to the user or viewer of the Site.  Use of the Site is subject to these Terms of Use as they may be modified from time to time at our sole discretion without prior notice. You are only authorized to access the Site if you agree to abide by all applicable laws, and to these Terms of Use which constitute an agreement between you and us.  If you find these terms to be unacceptable, please do not use this Site.</p>
                    <p>The Terms of Use is complemented by our Privacy Policy available at <Link to="/privacy">http://www.doverfoundation.org/privacy</Link>.</p>
                    <p><u>Access and Use of Site.</u> This Site is intended for persons who are 17 or older and is for general information purposes only. If you are under 17, please do not use the Site. The Site and the articles, reviews, comments, images, sounds, and other materials on the Site (including, but not limited to, the design, layout, look, appearance and graphics) (collectively, "Site Content") are protected by copyright and other intellectual property laws. You may not reproduce, republish, distribute, sell, store on any other web site or other form of electronic retrieval system, or otherwise use any Site Content without our express permission. If you would like permission to use Site Content, please email us at info@doverfoundation.org. </p>
                    <p><u>User Provided Content.</u>  We may post reviews, comments, and other materials from users on the Site ("User Content"). We are not the publisher or author of User Content and we may not screen User Content before it is posted. However, we reserve the right to edit, redact or delete User Content. You agree that any User Content you submit will not be unlawful or infringe on the rights of others. You also agree to be solely responsible for any damages resulting from any User Content you submit. All User Content submitted to us will be treated as non-proprietary and non-confidential. We may reproduce, republish, distribute, or otherwise use User Provided Content for any purpose whatsoever.</p>
                    <p><u>Copyright Infringement Claims. </u> If you believe that any Site Content infringes upon your copyright, please notify us by email at info@doverfoundation.org. Your notice should include (a) a description of the copyrighted work that you claim has been infringed; (b) the URL where the allegedly infringing Site Content is located; (c) your full name, postal address, telephone number, and email address; (d) a statement that you have a good faith belief that the use of the allegedly infringing material on our Site is not authorized; and (e) a statement that you are the copyright owner or an authorized agent of the copyright owner.</p>
                    <p><u>Disclaimer of Warranties and Liability.</u> This Site and all Site Content are provided "AS IS" to the full extent permitted by law. This means that we do not warrant that the Site or Site Content will be (a) fit for any particular purpose; (b) uninterrupted or error-free; or (c) free of defamatory, offensive, or illegal material or defects such as viruses, malfunctions, or harmful components that could damage or allow unauthorized access to your computer or computer network. You acknowledge that the Site and Site Content may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.  Neither we, nor our officers, directors, members, employees, agents, or representatives are liable for any damages resulting from use of this Site or Site Content including, but not limited to, damages caused by defamatory, offensive, or illegal material or damages caused by viruses, malfunctions, or other harmful components accessed through the Site.  </p>
                    <p>In no event shall we, and our affiliated entities, together with our/their respective employees, agents, directors, officers, and shareholders, be responsible or liable for any direct, indirect, incidental, special or consequential damages, or damages for loss of profits, revenue, data or use, incurred by you or any third party, whether in an action in contract or tort, arising from or related to content located on (or accessible via) the Site, or related to your access to, or use of, or inability to use the Site, even if we have been advised of the possibility of such damages or losses.</p>
                    <p>It is strictly forbidden for you to create or introduce, or advise others to create or introduce, any type of virus or malware to the Site, which could (or will) cause damage or other harmful effects.  </p>
                    <p>The content of the Site is only meant for informative purposes.  Therefore, no information, materials or content contained in the Site shall constitute advice, or substitute for professional advice.</p>
                    <p>Some jurisdictions do not allow the disclaimer or exclusion of certain warranties or the disclaimer or exclusion of certain liabilities.  To the extent that they are held to be legally invalid, disclaimers, exclusions, and limitations set forth in these Terms of Use do not apply; however, all other terms and conditions shall apply and remain in full force and effect.  </p>
                    <p><u>Links and Changes to Site.</u> This Site includes links to other web sites that are not maintained by us. We are not responsible for any information, functionality, or content of these web sites nor does their presence mean that we endorse such web sites. We may at any time and for any reason in our sole discretion, modify or discontinue the Site or Site Content or terminate or restrict your access to the Site. </p>
                    <p><u>Indemnification.</u>  You agree to defend us, indemnify us , and hold us harmless (as well as our affiliated entities together with our/their respective employees, agents, directors, officers and shareholders) from and against all the liabilities, claims, damages and expenses (including reasonable attorney fees and costs) arising out of your use of the Site; your failure to use the Site; your breach or alleged breach of these Terms of Use or our Privacy Policy, or your breach or alleged breach of the copyright, trademark, proprietary or other rights of third parties. </p>
                    <p><u>Acceptance.</u>  By using the Site, you agree to accept the current Terms of Use.  Your continued use of the Site now, or following the posting of notice of any changes in the operating rules, will indicate acceptance by you of such rules, changes or modifications.</p>
                    <p><u>Applicable Law.</u>  Your use of the Site and any disputes arising out of such use of the Site is subject to the laws of Illinois State without reference to its conflict or choice of law rules, and the parties submit to the exclusive jurisdiction of the state and federal courts located in Illinois State.</p>
                    <p>Effective: November 9, 2011</p>
                </Section>
            </Main>
            <Footer />
        </BreakpointProvider>
    )
}

export default terms

export const Head: HeadFC = () => <title>Terms of Use</title>
