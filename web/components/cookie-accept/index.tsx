import React from "react";
import styled from "@emotion/styled";
import { Flex } from "rebass";
import SectionLayout from "layouts/section";
import BlankArea from "components/blank-area";

const CookieAccept: React.FC = () => {
  return (
    <Positioner>
      <BlankArea height={24} />
      <SectionLayout variant="content-default" alignContent="center">
        <Desc>
          This website stores cookies on your browser. These cookies are used to
          improve your website experience and provide more personalized services
          to you, both on this website and through other media. We won't track
          your information when you visit our site. But in order to comply with
          your preferences, we'll have to use just one tiny cookie so that
          you're not asked to make this choice again.
        </Desc>

        <BtnArea pb={["20px", "0px", "20px", "0px"]}>
          <Button isAccept={true}>Accept</Button>
          <Button isAccept={false}>Decline</Button>
        </BtnArea>
      </SectionLayout>
    </Positioner>
  );
};

export default CookieAccept;

interface Color {
  isAccept: Boolean;
}

const Positioner = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 182px;
  background-color: #ffffff;
  z-index: 998;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Desc = styled.div`
  width: 100%;

  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  color: #4e4e4e;
`;

const BtnArea = styled(Flex)`
  width: 145px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-left: auto;
`;

const Button = styled.div<Color>`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #2562ff;
  color: ${p => (p.isAccept ? "#2562ff" : "#5B5C5D")};

  margin: 0px 10px;

  cursor: pointer;
`;