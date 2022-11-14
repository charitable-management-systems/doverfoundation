import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Logo from "../assets/doverScholarsLogo.svg"
import FoundationLogo from "../assets/doverFoundationLogo.svg"
import Menu from "../assets/menu.svg"
import { useBreakpointContext } from "../providers/BreakpointProvider"

const navItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About Us',
        url: '/about',
    },
    {
        title: 'Information',
        url: '/programInformation',
    },
    {
        title: 'Renewal Process',
        url: '/renewalProcess',
    },
    {
        title: 'News',
        url: '/news',
    },
    {
        title: 'Apply',
        url: '/programInformation#applicationProcess',
    }
]

const StyledLogo = styled(Logo)`
  height: 60px;
  width: 204px;
  display: flex;
  margin-right: auto;
  @media (max-width: 420px) {
    height: 44px;
    width: 150px;
  }
`

const StyledFoundationLogo = styled(FoundationLogo)`
    display: flex;
    height: 60px;
    width: 204px;
    margin-left: auto;
    @media (max-width: 420px) {
        height: 44px;
        width: 150px;
    }
`

const StyledMenu = styled(Menu)`
  margin-left: auto;
`

const NavLinks = styled.div`
  display: flex;
  marign-right: auto;
  max-width: 600px;
  padding-right: 32px;
  flex-grow: 1;
  justify-content: space-around;  
`

const Container = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  height: 76px;
  padding: 8px;
  align-items: center;
  background-color: white;
  z-index: 300;
  border-bottom: 1px solid rgba(155,155,155,0.1);
  box-shadow: 0px 0px 10px rgba(155,155,155,0.2);
  justify-content: space-around;
  @media (max-width: 420px) {
        height:52px;
    }
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


const NavLink = ({ title, url, subNav }: any) => {
    const [isHovering, setIsHovering] = React.useState<boolean>(false);
    return (
        <div onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} >
            <div >
                <StyledNavLink to={url}>{title}</StyledNavLink>
            </div>
            <SubNav $show={subNav != null && isHovering}>
                {subNav?.map(({ title, url, type }: any) =>
                    type === 'pdf'
                        ? (<SubNavLink><a href={url} target="_blank">{title}</a></SubNavLink>)
                        : (<SubNavLink><Link to={url}>{title}</Link></SubNavLink>)
                )}
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

const StyledNavLink = styled(Link)`
    font-size: 18px;
    color: rgb(0, 75, 141);
    text-decoration: none;
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
                <Link to="/"><StyledFoundationLogo /></Link>
                <StyledMenu onClick={() => setIsOpen(!isOpen)} />
            </Container>
            <MobileNavMenu $show={isOpen}>
                <MobileNavList>
                    {navItems.map(navItem => (
                        <MobileNavListItem>
                            <Link to={navItem.url}>{navItem.title}</Link>
                            {navItem.items && (
                                <MobileNavList>
                                    {navItem.items.map(subItem =>
                                        (subItem as any)?.type === 'pdf'
                                            ? (<li><a href={subItem.url} target="_blank">{subItem.title}</a></li>)
                                            : (<li><Link to={subItem.url}>{subItem.title}</Link></li>)
                                    )}
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
                    <NavLink title={navItem.title} url={navItem.url} subNav={navItem?.items} />
                ))}
            </NavLinks>
            <Link to="/"><StyledFoundationLogo /></Link>
        </Container>
    );
};

export { Header };