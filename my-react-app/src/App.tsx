import React, { useState } from 'react';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import MotoComponent from './MotoComponent.tsx';
import { Footer } from 'antd/es/layout/layout';
import MotoForm from './forms/MotoForm.tsx';
import SportBike from './models/SportBike.ts';
import motoStore from './stores/MotoStore.ts';

const { Header, Content } = Layout;

  const items = new Array(3).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<SportBike | null>(null); 
  
  const showModal = () => {
    setIsModalVisible(true);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedProduct(null); 
  };

  const handleFormSubmit = (cardProduct: SportBike) => {
    if (selectedProduct) {
      motoStore.removeMoto(selectedProduct); 
    }
    motoStore.addMoto(cardProduct); 
    setIsModalVisible(false); 
    setSelectedProduct(null); 
  };

  const handleEdit = (moto: SportBike) => {
    setSelectedProduct(moto); 
    showModal();
  };

  const handleDelete = (product: SportBike) => {
    motoStore.removeMoto(product); 
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
            <div style={{display:'flex',flexDirection:'row',gap:10 }}>
             
        {motoStore.motos.map((moto, index) => (
                  <MotoComponent 
                    key={index} 
                    motoModel={moto} 
                    onEdit={() => handleEdit(moto)}
                    onDelete={() => handleDelete(moto)} 
                  />
                ))}
      </div>
    </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
         Ant Design ©{new Date().getFullYear()} Created by Ant UED
       </Footer>    </Layout>
  );
};

export default App;