import React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
  line-height: 64px;
`;

const CustomMenu = () => {
  return (
    <StyledMenu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">Home</Menu.Item>
    </StyledMenu>
  );
};

export default CustomMenu;
