import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Logo from "../assets/doverScholarsLogo.svg"
import Menu from "../assets/menu.svg"
import { useBreakpointContext } from "../providers/BreakpointProvider"

const navItems = [
    {
        title: 'Information',
        url: '/programInformation',
        items: [
            {
                title: 'Eligibility',
                url: '/programInformation#eligibility',
            },
            {
                title: 'Rules and Regulations',
                url: '/programInformation#rules',
            },
            {
                title: 'Selection Process',
                url: '/programInformation#selection',
            },
            {
                title: 'Application Process',
                url: '/programInformation#applicationProcess',
            },
            {
                title: 'Contact Us',
                url: '/programInformation#contact',
            }
        ]
    },
    {
        title: 'Renewal Process',
        url: '',
    },
    {
        title: 'News',
        url: '',
        items: [
            {
                title: 'Awardees',
                url: '',
            },
            {
                title: 'Colleges Attended',
                url: '',
            },
            {
                title: 'Majors',
                url: '',
            },
            {
                title: 'Press Releases',
                url: '',
            }
        ]
    },
    {
        title: 'Apply',
        url: '',
        items: [
            {
                title: 'Application',
                url: '',
            },
            {
                title: 'Employee Verification Form',
                url: '',
            },
            {
                title: 'Academic Record Form',
                url: '',
            },
            {
                title: 'Recommender Form',
                url: '',
            }
        ]
    }
]

const StyledLogo = styled(Logo)`
  height: 44px;
  width: 150px;
  display: flex;
  margin-right: auto;
`

const StyledMenu = styled(Menu)`
  margin-left: auto;
`

const NavLinks = styled.div`
  display: flex;
  marign-left: auto;
  flex-grow: 1;
  justify-content: space-around;  
`

const Container = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  height: 48px;
  padding: 8px;
  gap: 32px;
  align-items: center;
  background-color: white;
  z-index: 300;
  border-bottom: 1px solid rgba(155,155,155,0.1);
  box-shadow: 0px 0px 10px rgba(155,155,155,0.2);
`

const SubNav = styled.div<{ $show: boolean }>`
  margin-top: 23px;
  position: absolute;
  min-width: 124px;
  background-color: white;
  max-height: ${props => (props as any).$show ? '500px;' : '0px;'}
  overflow: hidden;
  transition: 400ms ease-in-out;
  box-shadow: 0px 10px 10px rgba(155,155,155,0.2);
`;

const SubNavLink = styled.div`
  padding: 8px 16px;
`;


const NavLink = ({title, url, subNav }: any) => {
    const [isHovering, setIsHovering] = React.useState<boolean>(false);
    return (
        <div onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} >
            <div >
                <a href={url}>{title}</a>
            </div>
            <SubNav $show={subNav != null && isHovering}>
                {subNav?.map(({ title, url }) => (
                    <SubNavLink><a href={url}>{title}</a></SubNavLink>
                ))}
            </SubNav>
        </div>
    )
};

const MobileNavMenu = styled.div<{ $show: boolean }>`
    position: fixed;
    right: 0;
    z-index: 100;
    height: calc(100vh - 81px);
    width: 200px;
    display: flex;
    padding-top: 16px;
    padding-left: 16px;
    margin-left: auto;
    background-color: white;
    box-shadow: -8px 10px 14px 0px rgba(155,155,155,0.17);
    border-left: 1px solid rgba(155,155,155,0.1);
    transition: 400ms ease-in-out;
    transform: ${props => (props as any).$show ? 'translateX(0)' : 'translateX(216px);'},
`

const StyledNavLink = styled(NavLink)`
`

const MobileNavList = styled.ul`
    padding-left: 8px;
    width: 100%;
    list-style-type: none;
    font-size: 14px;
    margin-top: 4px;
    margin-bottom: 4px;
    line-height: 18px;
`

const MobileNavListItem = styled.li`
    margin-top: 8px;
    margin-bottom: 8px;
`

const MobileHeader = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    React.useEffect(() => {
        if (isOpen) {
            document.getElementsByTagName('body')[0].className = 'noscroll';
        } else {
            document.getElementsByTagName('body')[0].className = '';
        }
    }, [isOpen]);
    return (
        <>
            <Container>
                <Link to="/"><StyledLogo /></Link>
                <StyledMenu onClick={() => setIsOpen(!isOpen)} />
            </Container>
            <MobileNavMenu $show={isOpen}>
                <MobileNavList>
                    {navItems.map(navItem => (
                        <MobileNavListItem>
                            <a href={navItem.url}>{navItem.title}</a>
                            {navItem.items && (
                                <MobileNavList>
                                    {navItem.items.map(subItem => (
                                        <li><a href={subItem.url}>{subItem.title}</a></li>
                                    ))}
                                </MobileNavList>
                            )}
                        </MobileNavListItem>
                    ))}
                </MobileNavList>
            </MobileNavMenu>
        </>
    )
};

const Header = () => {
    const breakpoint = useBreakpointContext();
    if (breakpoint !== 'large') {
        return (<MobileHeader />)
    }
    return (
        <Container>
            <Link to="/"><StyledLogo /></Link>
            <NavLinks>
                {navItems.map(navItem => (
                    <StyledNavLink title={navItem.title} url={navItem.url} subNav={navItem?.items} />
                ))}
            </NavLinks>
        </Container>
    );
};

export { Header };