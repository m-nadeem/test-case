import React from 'react';
import { List, Card, ListProps, Avatar, Button } from 'antd';
import styled from 'styled-components';
import { IUser } from '../../App';
import { LikeOutlined, MessageOutlined, StarOutlined, EditOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import CustomButton from '../button/CustomButton';

interface CustomListProps<T> extends ListProps<T> {
  customClassName?: string;
  handleEdit: (user: IUser | null) => void;
}
//border: 1px solid #d9d9d9;
const StyledList: any = styled(List)`
  .custom-list-item {
    margin-bottom: 16px;
    background: #fafafa;
    padding: 24px;
    
  }
  .ant-list-item-action{
    position: absolute;
    top: 3px;
    right: 9px;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px #fefefe;
      cursor: pointer;
    }
  }

  .custom-card {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }
`;

const CustomList = <T extends any>({ customClassName, handleEdit, ...rest }: CustomListProps<T>) => {



  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <StyledList
    grid={{ gutter: 16, column: 2 }}
      className={`custom-list ${customClassName}`}
      {...rest}
      renderItem={(item:IUser) => {
        return (
          <List.Item
          className='custom-list-item'
            key={item.id}
            actions={[
              <CustomButton 
              type='link'
            icon={<EditOutlined />} 
            onClick={() => handleEdit(item)} />
            ]}
           >
            <List.Item.Meta
              avatar={<Avatar>{item.icon}</Avatar>}
              title={item.name}
              description={item.birthday} />
            {item.about}
          </List.Item>
        );
      }}
    />
  );
};

export default CustomList;
