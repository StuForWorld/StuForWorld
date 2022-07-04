import { Menu, Icon, Switch } from 'antd';
import React,{Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header'
// import Main from './Main';
const { SubMenu } = Menu;

export default class Home extends Component {
  render() {
    return (
        
      <div>
        <Routes>
        <Menu
          theme="dark"
          style={{ width: 256,height:780 }}
          defaultOpenKeys={['sub1']}
          
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <span> 商品管理</span>
              </span>
            }
          >
            <Menu.Item key="1"><Link to="/">添加商品</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/show">查看商品列表</Link></Menu.Item>
          </SubMenu>
        </Menu>
        <Route exact path="/" element={<Header/>}></Route>
        </Routes>
      </div>
      
    );
  }
}
