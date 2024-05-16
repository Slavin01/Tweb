import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import SportBike from './models/SportBike';

const { Meta } = Card;

interface MotoCardProps{
  motoModel: SportBike;
}
const MotoComponent: React.FC<MotoCardProps> = ({motoModel}) => (
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
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />
    ]}
  >
    <Meta
      title={motoModel.name}
      description={motoModel.description}
    />
  </Card>
);

export default MotoComponent;