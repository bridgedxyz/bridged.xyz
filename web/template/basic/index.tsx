import BlankArea from 'components/blank-area';
import React from 'react'
import { Flex } from 'rebass';

function BasicTemplate(props) {
  const { children } = props;

  return (
    <Flex alignItems="center" justifyContent="center" >
      <Flex flexDirection="column" width={["280px", "730px", "985px", "1040px"]} mx="20px">
        <BlankArea height={40} />
        {children}
        <BlankArea height={30} />
      </Flex>
    </Flex>
  )
}

export default BasicTemplate
