import React from "react";
import { Table ,useEffect,useState} from "antd";
import { $list } from "../../api/RoleApi";
import { useFetcher } from "react-router-dom";

export default function Role() {
  let [roleList,setRoleList]=useState([])

  useEffect(()=>{
    $list().then()
  },[])
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <>
      <Table size="small" dataSource={dataSource} columns={columns} />;
    </>
  );
}
