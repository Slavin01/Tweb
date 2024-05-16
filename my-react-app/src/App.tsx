import React, { useState } from 'react';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import MotoComponent from './MotoComponent.tsx';
import Moto from './models/Moto.ts';
import { Footer } from 'antd/es/layout/layout';
import MotoForm from './forms/MotoForm.tsx';
import SportBike from './models/SportBike.ts';

const { Header, Content } = Layout;

const initialData:SportBike[] = [
    {
     name: "Honda",
     model: "CBR600RR",
     description: "SportBike",
     imageUrl:"https://news.webike.net/wp-content/uploads/2023/12/20231222_cbr600rr2231222-cbr600rr_001H_resulte.webp",
     price: 1300,
     suspension: "",
      type: ""
    },
    {
      name: "Kawasaki",
      model: "Ninja",
      description: "SportBike",
      imageUrl:"https://content2.kawasaki.com/ContentStorage/KMC/Products/8797/6b80d839-96ba-482a-9348-c8de27ae9063.png?w=767",
      price: 1300,
      suspension: "",
      type: ""
     }
  ];

  const items = new Array(3).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [cardData, setCardData] = useState<SportBike[]>(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
      setIsModalVisible(true);
    };
    const handleCancel = () => {
      
      setIsModalVisible(false);
    
    };

  const handleFormSubmit = ( MotoCard: SportBike) => {
    console.log("Handle submit")
    console.log(MotoCard)
    setCardData([...cardData, MotoCard]);
    console.log("final card data");
    console.log(cardData);

    setIsModalVisible(false);
  };


  const emptyCard:SportBike = {
    name: "",
    description: "",
    model: "",
    price: 0,
    imageUrl: "",
    suspension: "",
    type: ""
  
  }
  
  console.log(cardData);
  return (
    <Layout>
       <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
         <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
          <Button type="primary" onClick={showModal} style={{ marginBottom: 16, marginLeft:16}}>
            Add new moto
          </Button>
          <MotoForm visible={isModalVisible} onCancel={handleCancel} onSubmit={handleFormSubmit} card = {emptyCard} />
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
            <div style={{display:'flex',flexDirection:'row',gap:10 }}>{cardData.map((card , index) => (
        <MotoComponent key={index} motoModel={card} />
      ))}</div>
    </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
         Ant Design ©{new Date().getFullYear()} Created by Ant UED
       </Footer>    </Layout>
  );
};

export default App;