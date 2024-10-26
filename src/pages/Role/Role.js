import React, { useEffect, useState } from "react";
import { Button, Table, Drawer, Checkbox, Form, Input, message } from "antd";
import { $list,$add } from "../../api/RoleApi";
import { useFetcher } from "react-router-dom";
import MyNotification from "../../components/mynotification";

export default function Role() {
  // 表单提交的方法
  const onFinish = (values) => {
    $add(values).then(({success,message})=>{
      if(success){
        setNotiMsy({ type: "success", description: message });
        loadList()
      }else {
        setNotiMsy({ type: "error", description: message });
      }
    })
  };
    // 角色列表数据
    let [roleList,setRoleList]=useState([])
  useEffect(()=>{
    loadList()
  },[]);
  // 加载列表数据的方法 
  const loadList =()=>{
    $list().then(data=>{
      data=data.map(r=>{
        return {
          ...r,
          key:r.roleId
        }
      })
      setRoleList(data)
    })
  };
   // 通知框状态
   let [notiMsy, setNotiMsy] = useState({ type: "", description: "" });

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  // 是否打开抽屉
  const [open, setOpen] = useState(false);
  // 关闭抽屉的方法
  const onClose = () => {
    setOpen(false);
  };

 
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
            span: 5,
          }}
          wrapperCol={{
            span: 18,
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
            label="角色名称"
            name="roleName"
            rules={[
              {
                required: true,
                message: "请输入角色名称!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Button type="primary"  htmlType="submit">
              添加
            </Button>
            <Button style={{marginLeft:'10px'}}>
              取消
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
