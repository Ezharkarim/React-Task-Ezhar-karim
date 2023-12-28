import React, { useState } from "react";
import { TeamOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import Logo from "../assets/images/images2x.png";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      style={{ backgroundColor: "#015249", borderRadius:"0px 10px 0px 10px"}}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className=" mt-8 mx-2">
        <img src={Logo} alt="logo here.." />
      </div>
      <p className=" text-white text-center mt-20 bg-[#043933] p-4 mx-4 rounded-md font-[Lato]">
        <TeamOutlined /> {!collapsed && <span>CUSTOMERS </span>}
      </p>
    </Sider>
  );
};

export default Sidebar;
