import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact us</FooterLinkTitle>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destination</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink
                to={{
                  pathname: "https://www.instagram.com/_sarosh_khan/",
                }}
                target="_blank"
              >
                Instagram
              </FooterLink>
              <FooterLink
                to={{
                  pathname: "https://www.facebook.com/sarosh.abdullah.31/",
                }}
                target="_blank"
              >
                Facebook
              </FooterLink>
              <FooterLink
                to={{
                  pathname:
                    "https://www.linkedin.com/in/sarosh-khan-b8730a169/",
                }}
                target="_blank"
              >
                LinkedIn
              </FooterLink>
              <FooterLink
                to={{
                  pathname: "https://twitter.com/SaroshAbdullah3",
                }}
                target="_blank"
              >
                Twitter
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Descriptions</FooterLinkTitle>
              <FooterLink to="/">WebApps</FooterLink>
              <FooterLink to="/">Mobile Apps</FooterLink>
              <FooterLink to="/">SEO</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">TheDopeGuys</SocialLogo>
            <WebsiteRights>
              TheDopeGuys © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/sarosh.abdullah.31/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/_sarosh_khan/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/SaroshAbdullah3"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/sarosh-khan-b8730a169/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
