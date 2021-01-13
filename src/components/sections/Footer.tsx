import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "../misc/Layouts"
import Logo from "../../assets/halo-arlo-logo-white.svg";
import Instagram from "../../assets/instagram.svg";
import Shopee from "../../assets/full-shopping-cart.svg";
import config from "../../lib/config";


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-white hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-400`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <Logo />
          <LinksContainer>
            <Link href="#">Home</Link>
            <Link href={config.whatsapp_link} target="blank">Contact Us</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href={`https://instagram.com/${config.instagram_account}`} target="blank">
              <Instagram />
            </SocialLink>
            <SocialLink href={`https://shopee.co.id/${config.shopee_account}`} target="blank">
              <Shopee />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2020, haloarlo.id - All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
