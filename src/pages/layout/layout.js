import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
// 图标
import {
  NotificationOutlined,
  MailOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import "./layout.scss";
const { Header, Sider, Content } = Layout;
const layout = () => {
  const navigate=useNavigate()
  // 左侧菜单栏
  const items2 = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "账户管理",
      children: [
        {
          key: "1-1",
          label: "角色管理",
        },
        {
          key: "1-2",
          label: "用户管理",
        },
      ],
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "客房管理",
      children: [
        {
          key: "2-1",
          label: "房型管理",
        },
        {
          key: "2-2",
          label: "房间管理",
        },
        {
          key: "2-3",
          label: "营业管理",
        },
      ],
    },
    {
      key: "3",
      icon: <SettingOutlined />,
      label: "客户管理",
      children: [],
    },
  ];
  // 顶部菜单栏列表
  const items = [
    {
      label: "首页",
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: "通知",
      key: "mail",
      icon: <NotificationOutlined />,
    },
    {
      label: "邮件",
      key: "noti",
      icon: <MailOutlined />,
    },
    {
      label: "个人中心",
      key: "mine",
      icon: <UserOutlined />,
      children: [
        {
          key: "my",
          label: "个人信息",
        },
        {
          key: "pwd",
          label: "修改密码",
        },
        {
          key: "exit",
          label: "退出登录",
        },
      ],
    },
  ];
  // 顶部菜单栏当前选项
  const [current, setCurrent] = useState("home");
  // 点击菜单方法
  const onClickMenu = (e) => {
    setCurrent(e.key);
    // 判断点击的菜单项
    switch(e.key){
      // 退出系统
      case 'exit':
        sessionStorage.clear()
        localStorage.clear()
        navigate('/')
        break
    }
  };
  // 侧边栏折叠状态
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          {collapsed ? "系统" : "后台管理系统"}
        </div>
        <Menu
          onClick={onClickMenu}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items2}
        />
      </Sider>
      <Layout>
        <Header
          className="header"
          style={{
            padding: 0,
            background: "#ffffff",
          }}
        >
          <Button
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              border: "transparent",
            }}
          />
          <Menu
            onClick={onClickMenu}
            className="headermenu"
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};
export default layout;
