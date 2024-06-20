import React from 'react';
import { Button, ButtonProps } from 'antd';
import { ButtonType } from 'antd/es/button';
import './CustomButton.scss';


interface CustomButtonProps extends ButtonProps {
  customType?: ButtonType;
}

const CustomButton: React.FC<CustomButtonProps> = ({ customType, children, icon, ...rest }) => {
  return (
    <Button type={customType} icon={icon}  {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;