import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button, Input, Modal } from 'antd';
import CustomButton from './components/button/CustomButton';
import CustomInput from './components/input/CustomInput';
import CustomList from './components/list/CustomList';
import CustomModal from './components/modal/CustomModal';
import { Layout, Breadcrumb, Row, Col } from 'antd';
import styled from 'styled-components';
import CustomMenu from './components/menu/CustomMenu';
import CustomFooter from './components/footer/CustomFooter';
import { UserAddOutlined } from '@ant-design/icons';
import { get } from './shared/Api';

const usersData = [
  {
    id: 1,
    name: "Elon Musk",
    icon: "🚀",
    birthday: "June 28, 1971",
    about: "CEO of SpaceX and Tesla, Inc."
  },
  {
    id: 2,
    name: "Bill Gates",
    icon: "💻",
    birthday: "October 28, 1955",
    about: "Co-founder of Microsoft Corporation"
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    icon: "🌐",
    birthday: "May 14, 1984",
    about: "Co-founder and CEO of Facebook, Inc."
  },
  {
    id: 4,
    name: "Sundar Pichai",
    icon: "🔍",
    birthday: "June 10, 1972",
    about: "CEO of Alphabet Inc. and Google LLC"
  },
  {
    id: 5,
    name: "Tim Cook",
    icon: "🍏",
    birthday: "November 1, 1960",
    about: "CEO of Apple Inc."
  },
  {
    id: 6,
    name: "Satya Nadella",
    icon: "☁️",
    birthday: "August 19, 1967",
    about: "CEO of Microsoft Corporation"
  },
  {
    id: 7,
    name: "Jeff Bezos",
    icon: "🛒",
    birthday: "January 12, 1964",
    about: "Founder and former CEO of Amazon.com, Inc."
  }
];

export interface IUser{
  id: number
    name: string;
    icon: string;
    birthday: string;
    about: string;
}

export interface IAppData{
  users: Array<IUser>;
    selectedUser: IUser | null;
    isModalVisible: boolean;
    newUserName: string;
    isEditMode: boolean;
}

const App = () => {
  
  const { Header, Content } = Layout;

  const StyledLayout = styled(Layout)`
    min-height: 100vh;
  `;
  
  const SiteLayoutContent = styled.div`
    background: #fff;
    padding: 24px;
    min-height: 280px;
  `;
  
  const GridItem = styled.div`
    background: #fafafa;
    padding: 24px;
    text-align: center;
    border: 1px solid #d9d9d9;
  `;

  const [state, setState] = useState({} as IAppData);

  const showModal = (user: IUser | null = null): void => {
    setState(prevState => ({
      ...prevState,
      selectedUser: user,
      isEditMode: !!user,
      isModalVisible: true
    }));
  };

  const handleEdit = (user: IUser | null = null): void => {
    setState(prevState => ({
      ...prevState,
      newUserName: user ? user.name: "",
      selectedUser: user,
      isEditMode: !!user,
      isModalVisible: true
    }));
  };



  const handleOk = (): void => {
    if (state.isEditMode) {
      setState(prevState => ({
        ...prevState,
        users: prevState.users.map(user => user.id === prevState.selectedUser!.id ? { ...user, name: state.newUserName } : user),
        isModalVisible: false,
        newUserName: ''
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        users: [...prevState.users, { id: prevState.users.length + 1, name: state.newUserName, icon: "🆕" }],
        isModalVisible: false,
        newUserName: ''
      } as IAppData));
    }
  };

  const handleDelete = () => {
    setState((prevState: any) => ({
      ...prevState,
      users: prevState.users.filter((user: any) => user.id !== prevState.selectedUser.id),
      isModalVisible: false,
      newUserName: ''
    }));
  };

  const handleCancel = (): void => {
    setState(prevState => ({ ...prevState, isModalVisible: false }))
  }

  useEffect(() =>{
    console.log("in use effect")
    get().then(data => {
      console.log(data);
      setState({
      users: data,
      selectedUser: null,
      isModalVisible: false,
      newUserName: '',
      isEditMode: false
    } as IAppData); 
  });
  },[])

  return (
    <StyledLayout>
      <Header>
        <div className="logo" />
        <CustomMenu />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <SiteLayoutContent>
        <div style={{ padding: '20px' }}>
      <CustomList
        customClassName="my-custom-list"
        dataSource={state.users}
        handleEdit={handleEdit}
      />      
    <CustomButton onClick={() => showModal()} icon={<UserAddOutlined />} >Add User</CustomButton>
    <CustomModal
    handleChange={e => setState(prevState => ({ ...prevState, newUserName: e.target.value }))}
    newUserName={state.newUserName}
    isEditMode={state.isEditMode}
    isModalVisible={state.isModalVisible}
    handleOk={handleOk}
    handleCancel={handleCancel}
    handleDelete={handleDelete}
    user={state.isEditMode ? state.selectedUser: null} />    
  </div>          
      </SiteLayoutContent>
      </Content>
      <CustomFooter />
    </StyledLayout>
    
  );
}

export default App;
