import React from 'react';

import { hot } from 'react-hot-loader/root';

import styled from 'styled-components';
import { Link, useCurrentRoute } from 'react-navi';

import OasisLayout from '../layouts/OasisLayout';
import SEO from '../components/SEO';
import mixpanel from 'mixpanel-browser';
import { Routes } from '../utils/constants';

import { Box, Flex } from '@makerdao/ui-components-core';
import useLanguage from 'hooks/useLanguage';

const TopBackground = styled(Box)`
  position: absolute;
  height: 570px;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: ${props => props.background};
`;

const Heading = styled(Box)`
  text-align: center;
  letter-spacing: 0.4px;
  margin: 154px auto 0;
  max-width: 500px;

  h1 {
    font-size: 48px;
    font-weight: bold;
    line-height: 58px;
    letter-spacing: 1.7px;
    color: #253a44;
    margin-bottom: 17px;
  }

  p {
    font-size: 18px;
    line-height: 27px;
    color: ${props => props.textColor};
  }

  .button {
    margin-top: 60px;
    color: ${props => props.btnTextColor};
    padding: 0 22px;
    border-radius: 6px;
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
    height: 39px;
    line-height: 38px;
    text-decoration: none;
    box-shadow: 0 2px 2px ${props => props.btnShadowColor};
    transition: all 0.15s ease;
    background-color: white;
  }

  .button:hover {
    box-shadow: 0 5px 5px ${props => props.btnShadowColor};
    transform: translateY(-1px);
  }
`;

const KeyPoints = styled(Box)`
  margin-top: 200px;
  padding: 0 100px 0 148px;
  text-align: left;
  
  .key-point {
    justify-content: space-between;
    .image {
      width: 300px;
    }
    .content {
      max-width: 500px;
      
      h1 {
        font-family: 'SF Pro Display',Arial,Helvetica,sans-serif;
        font-size: 30px;
        line-height: 36px;
        letter-spacing: 0.01px;
        color: #231536;
        margin-bottom: 13px;
      }
      
      p {
        font-size: 18px;
        line-height: 23px;
        color: #48495F;
      }
    }
  }
   
  .key-point:nth-of-Type(2) {
    margin: 350px 0;
  }
  
  
`;

const AboutTrade = hot(() => {
  const { lang } = useLanguage();

  return (
    <OasisLayout style={{ position: 'static' }}>
      <SEO title="Oasis - About: Trade" />
      <TopBackground background="linear-gradient(180deg, rgba(199, 216, 227, 0.53) 0%, rgba(199, 216, 227, 0.53) 0%, rgba(222, 239, 236, 0.37) 63.02%, rgba(222, 239, 236, 0) 100%)" />
      <Heading
        textColor="#14303A"
        btnShadowColor="#C8E4E6"
        btnTextColor="#5894B5"
      >
        <h1>{lang.landing_page.trade_card.title}</h1>
        <p>{lang.landing_page.trade_card.description}</p>
        <a className="button" href={`/${Routes.TRADE}`}>
          {lang.landing_page.trade_card.button}
        </a>
      </Heading>
      <KeyPoints>
        <Flex className="key-point">
          <Box className="content">
            <h1>Decentralized Margin Trading</h1>
            <p>Users can choose to lock up their assets, draw DAI, and purchase more of that same asset to increase their exposure to their original position, without a third party.</p>
          </Box>
          <Box className="image" />
        </Flex>
        <Flex className="key-point">
          <Box className="image" />
          <Box className="content">
            <h1>Decentralized Margin Trading</h1>
            <p>Users can choose to lock up their assets, draw DAI, and purchase more of that same asset to increase their exposure to their original position, without a third party.</p>
          </Box>
        </Flex>
        <Flex className="key-point">
          <Box className="content">
            <h1>Decentralized Margin Trading</h1>
            <p>Users can choose to lock up their assets, draw DAI, and purchase more of that same asset to increase their exposure to their original position, without a third party.</p>
          </Box>
          <Box className="image" />
        </Flex>
      </KeyPoints>
    </OasisLayout>
  );
});

const AboutBorrow = () => (
  <OasisLayout>
    <h1>Borrow</h1>
  </OasisLayout>
);

const AboutSave = hot(() => (
  <OasisLayout>
    <h1>Save</h1>
  </OasisLayout>
));

export { AboutTrade, AboutBorrow, AboutSave };