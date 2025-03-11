import React from "react";
import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";

import { DatePicker } from "antd";

import { FloatButton } from "antd";

const Extra = () => {
  return (
    <div>
      <h1>Extra Page</h1>

      <Button type="primary" icon={<GithubOutlined />}>
        Primary Button
      </Button>

      <br />
      <DatePicker />
      <FloatButton />
    </div>
  );
};

export default Extra;
