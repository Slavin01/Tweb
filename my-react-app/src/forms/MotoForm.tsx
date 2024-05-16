import React, { useEffect } from 'react';

import {
    Button,
    Form,
    Input,
    InputNumber,
    Modal,

  } from 'antd';
import SportBikeCard from '../models/SportBike';

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  


interface ModalFormProps {
  visible: boolean;
  onSubmit: (data: SportBikeCard) => void;
  onCancel:() => void;
  card : SportBikeCard;
}

const MotoForm: React.FC<ModalFormProps> = ({ visible, onCancel ,onSubmit, card }) => {
  const [form] = Form.useForm();

 

  const onFinish = (values: any) => {
    const CardProduct = {
      name : values.name,
      model : values.model,
      imageUrl : values.imageUrl,
      price : values.price,
      description : values.description,
      suspension: values.suspension,
      type: values.type
    }
    console.log("OnFinishMethod values")
    console.log(values);
    alert("Of course you want to add the product with the name: "+values.name+" ?");
    onSubmit(CardProduct); 
    form.resetFields();
  };
  
  
  useEffect(() =>{
    form.resetFields();
  },[onCancel])



  return (
    <Modal title="Add product" open={visible} onCancel={onCancel} footer={null}>
        <Form form={form} {...formItemLayout} onFinish={onFinish} initialValues={{}}>
 

          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input moto name!' }]}>
           <Input />
          </Form.Item>

          <Form.Item label="Model" name="model" rules={[{ required: true, message: 'Please input moto model!' }]}>
           <Input />
          </Form.Item>
          <Form.Item label="ImageUrl" name="imageUrl" rules={[{ required: true, message: 'Please input imageUrl!' }]}>
           <Input />
          </Form.Item>



         <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please input a description!' }]}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input product price!' }]}>            
           <InputNumber />
           </Form.Item>
           <Form.Item label="Suspension" name="suspension" rules={[{ required: true, message: 'Please input a suspension!' }]}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Please input a type!' }]}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
             <Button type="primary" htmlType="submit">
               Submit
             </Button>
           </Form.Item>
         </Form>
       </Modal>
  );
};

export default MotoForm;