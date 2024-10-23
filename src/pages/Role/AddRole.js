import React from "react";

export default function AddRole() {
  return (
    <>
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
            <Button type="primary" htmlType="submit">
              添加
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
      <MyNotification nothiMsg={notiMsg}/>
    </>
  );
}
