import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
`;

const CustomFooter = () => {
  return (
    <StyledFooter>
      Ant Design ©2023 Created by Ant UED
    </StyledFooter>
  );
};

export default CustomFooter;
