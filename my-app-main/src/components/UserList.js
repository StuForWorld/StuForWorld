import React from 'react';
import { Space, Table, Tag } from 'antd'
import MyButton from './MyButton'
import{useSelector} from "react-redux"

import DelButton from './DelButton';
const { Column, ColumnGroup } = Table;
// const data = [
//       {
//         key: '1',
//         firstName: 'John',
//         lastName: 'Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//       },
//       {
//         key: '2',
//         firstName: 'Jim',
//         lastName: 'Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//       },
//       {
//         key: '3',
//         firstName: 'Joe',
//         lastName: 'Black',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//       },
//     ];
    
const UserList = (props) => {
  const state = useSelector((store)=> store.counterReducer);
  let   data =JSON.parse(JSON.stringify(state));
 return( 
 <>
<Table dataSource={data}>
  <ColumnGroup title="Name">
    <Column title="First Name" dataIndex="firstName" key="firstName" />
    <Column title="Last Name" dataIndex="lastName" key="lastName" />
  </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
 <>
         {tags.map((tag) => (
          <Tag color="blue" key={tag}>
         {tag}
          </Tag>
       ))}
            </>
       )}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
            <DelButton  mas={record}/>
            
            </Space>
          )}
        />
      </Table>
      <MyButton ></MyButton>
      </>
    )};
    
  

export default UserList;