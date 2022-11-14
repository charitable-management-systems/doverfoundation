import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

const Centered = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 16px;
    padding-top: 8px;
`

const Footer = () => (
    <Centered>
        Dover Scholars Program | PO Box 648 | Naperville, IL 60566 | info@doverfoundation.org |&nbsp;<Link to="/terms">Terms of Use</Link>&nbsp;|&nbsp;<Link to="/privacy">Privacy Policy</Link>
    </Centered>
)

export default Footer;