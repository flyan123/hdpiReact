import React from "react";
import { Button, Table ,useEffect,useState} from "antd";
import { $list } from "../../api/RoleApi";
import { useFetcher } from "react-router-dom";

export default function Role() {
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
      <Button className="search">添加</Button>
    </div>
      <Table size="small" dataSource={dataSource} columns={columns} />;
      {/* <Table size="small" dataSource={roleList} columns={columns} />; */}
    </>
  );
}
