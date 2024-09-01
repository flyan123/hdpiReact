import React from "react";
import "./Login.scss";
import { Button, Form, Input } from "antd";
export default function login() {
  // 表单成功提交方法
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const [form] = Form.useForm();
  return (
    <div className="login">
      <div className="content">
        <h2>管理系统</h2>
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          initialValues={{
            loginId: "",
            loginPwd: "",
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="账号"
            name="loginId"
            rules={[
              {
                required: true,
                message: "请输入账号!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="loginPwd"
            rules={[
              {
                required: true,
                message: "请输入密码!",
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
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button onClick={
              //  resetFields:重置一组字段到 initialValues
              ()=>{form.resetFields()}
            } style={{ marginLeft: "20px" }}>取消</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
