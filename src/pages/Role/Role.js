import React, { useEffect, useState } from "react";
import { Button, Table, Drawer, Checkbox, Form, Input } from "antd";
import { $list } from "../../api/RoleApi";
import { useFetcher } from "react-router-dom";

export default function Role() {
  // 表单
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  // 是否打开抽屉
  const [open, setOpen] = useState(false);
  // 关闭抽屉的方法
  const onClose = () => {
    setOpen(false);
  };
  // 角色列表数据
  // let [roleList,setRoleList]=useState([])
  // useEffect(()=>{
  //   $list().then(data=>{
  //     data=data.map(r=>{
  //       return {
  //         ...r,
  //         key:r.roleId
  //       }
  //     })
  //     setRoleList(data)
  //   })
  // },[])
  const dataSource = [
    {
      key: "1",
      roleId: "胡彦斌",
      roleName: "西湖区湖底公园1号",
    },
    {
      key: "2",
      roleId: "胡彦祖",
      roleName: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "角色编号",
      dataIndex: "roleId",
    },
    {
      title: "角色名称",
      dataIndex: "roleName",
    },
  ];
  return (
    <>
      <div>
        <Button
          className="search"
          onClick={() => {
            setOpen(true);
          }}
        >
          添加
        </Button>
      </div>
      <Table size="small" dataSource={dataSource} columns={columns} />;
      {/* <Table size="small" dataSource={roleList} columns={columns} />; */}
      <Drawer
        width={450}
        title="添加角色"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="角色编号"
            name="roleId"
            rules={[
              {
                required: true,
                message: "Please input your roleId!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="角色名称"
            name="roleName"
            rules={[
              {
                required: true,
                message: "Please input your roleName!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary"  htmlType="submit">
              添加
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
