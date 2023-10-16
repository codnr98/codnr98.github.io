import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
const Background = styled.div`
  width: 100%;
  /* background-image: linear-gradient(60deg, #29323c 0%, #485563 100%); */
  background-color: #e6f6ff;
  color: #0a7ea3;
`

const Footer: FunctionComponent = function () {
  return (
    <Background>
      <FooterWrapper>
        Thank you for visiting My Blog, Have a Good day
        <br />
        Powered By Gatsby.
      </FooterWrapper>
    </Background>
  )
}

export default Footer
