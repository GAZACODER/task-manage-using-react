import { Avatar, List } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../Store/store';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const ListComp: React.FC = () => {
  const boards = useSelector(
    (state: RootState) => state.boards.value)
  
    return(
    < List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.data}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
      />
      )
    };

export default ListComp;