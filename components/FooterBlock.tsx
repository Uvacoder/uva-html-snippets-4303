import * as React from 'react';
import { Footer, FooterGroup, FooterLink } from '@1milligram/design';

export const FooterBlock = () => (
    <footer className="block-footer">
        <div className="block-container">
            <Footer>
                <FooterGroup title="Products">
                    <FooterLink href="https://blur.page">Blur Page</FooterLink>
                    <FooterLink href="https://checkbrowsers.support">Check Browsers Support</FooterLink>
                    <FooterLink href="https://formvalidation.io">Form Validation</FooterLink>
                    <FooterLink href="https://intersectionobserver.io">IntersectionObserver Examples</FooterLink>
                    <FooterLink href="https://react-pdf-viewer.dev">React PDF Viewer</FooterLink>
                </FooterGroup>
                <FooterGroup title="Open sources">
                    <FooterLink href="https://1loc.dev">1 LOC</FooterLink>
                    <FooterLink href="https://csslayout.io">CSS Layout</FooterLink>
                    <FooterLink href="https://getfrontend.tips">Front-end Tips</FooterLink>
                    <FooterLink href="https://htmldom.dev">HTML DOM</FooterLink>
                    <FooterLink href="https://thisthat.dev">this VS that</FooterLink>
                </FooterGroup>
                <FooterGroup title="Follow us">
                    <FooterLink href="https://github.com/uvacoder">GitHub</FooterLink>
                    <FooterLink href="https://twitter.com/VaLandscapes">Twitter</FooterLink>
                </FooterGroup>
            </Footer>

            <div className="block-footer__copyright">
                © 2023 — {new Date().getFullYear()}, uvacoder. All rights reserved.
            </div>
        </div>
    </footer>
);
