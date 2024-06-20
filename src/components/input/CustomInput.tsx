// CustomInput.tsx
import React from 'react';
import { Input, InputProps } from 'antd';
import styled from 'styled-components';

interface CustomInputProps extends InputProps {
  customClassName?: string;
  // Add any other custom props here
}

const StyledInput = styled(Input)`
  &.custom-input {
    font-size: 16px;
    padding: 10px;
    border: 2px solid #1890ff;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s, box-shadow 0.3s;

    &:hover {
      border-color: #40a9ff;
    }

    &:focus {
      border-color: #40a9ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
`;

const CustomInput: React.FC<CustomInputProps> = ({ customClassName, ...rest }) => {
  return <StyledInput className={`custom-input ${customClassName}`} {...rest} />;
};

export default CustomInput;