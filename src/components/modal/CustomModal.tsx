// CustomModal.tsx
import React, { useEffect } from 'react';
import { Modal, ModalProps } from 'antd';
import styled from 'styled-components';
import CustomButton from '../button/CustomButton';
import { IUser } from '../../App';
import CustomInput from '../input/CustomInput';

export interface CustomModalProps extends ModalProps {
  customClassName?: string;
  isEditMode: boolean,
  isModalVisible: boolean,
  handleOk:(user: IUser | undefined | null) => void,
  handleCancel: () => void,
  handleDelete: (user: IUser | undefined | null) => void,
  handleChange:(e: any) => void,
  user?: IUser | null,
  newUserName: string
}

const StyledModal = styled(Modal)`
  .custom-modal-content {
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .custom-modal-header {
    background-color: #1890ff;
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 16px;
    font-size: 18px;
  }

  .custom-modal-body {
    padding: 24px;
    font-size: 16px;
  }

  .custom-modal-footer {
    padding: 16px;
    border-top: 1px solid #f0f0f0;
  }
`;



const CustomModal: React.FC<CustomModalProps> = ({ customClassName, children, isEditMode, isModalVisible, handleOk, handleCancel, handleDelete, newUserName, handleChange,  user, ...rest }) => {

  return (
    <StyledModal
      className={`custom-modal ${customClassName}`}
      {...rest}
      centered
    
     title={isEditMode ? 'Edit User' : 'Add User'}
      open={isModalVisible}
      onOk={() => handleOk(user)}
      onCancel={handleCancel}
      footer={[
        isEditMode && <CustomButton key="delete" onClick={() => handleDelete(user)}>Delete</CustomButton>,
        <CustomButton key="submit" type="primary" onClick={() => handleOk(user)}>
          {isEditMode ? 'Save' : 'Add'}
        </CustomButton>]} >
        
        <CustomInput
        placeholder="User Name"
        value={newUserName}
        onChange={e => handleChange(e)}
      />
    </StyledModal>
  );
};

export default CustomModal;
