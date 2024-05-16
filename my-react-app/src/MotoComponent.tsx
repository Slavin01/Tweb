import React from 'react';
import { EditOutlined, DeleteOutlined , SettingOutlined } from '@ant-design/icons';
import {  Card } from 'antd';
import Moto from './models/Moto';

const { Meta } = Card;

interface MotoCardProps{
  motoModel: Moto;
  onEdit:() => void;
  onDelete:()=>void;
}
const MotoComponent: React.FC<MotoCardProps> = ({motoModel,onEdit,onDelete}) => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt={motoModel.name}
        src={motoModel.imageUrl}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" onClick={(onEdit)} />,
      <DeleteOutlined key="delete" onClick={onDelete} />,
    ]}
  >
    <Meta
      title={motoModel.name}
      description={motoModel.description}
    />
  </Card>
);

export default MotoComponent;