import React, { useState } from "react";

import { Table, Tag, Space,Input } from "antd";
import { PageHeader } from 'antd';
import "antd/dist/antd.css";

const SampleTable = ({ list}) => {
  const tableData = {
    bordered: false,
    loading: false,
    size: "middle",
    ColumnGroup: { title: <h1>Hello, world</h1> },
    scroll: undefined,
    top: "none",
  };
  const { Search } = Input
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 80,
      key: "name",
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      width: 150,
      key: "symbol",
    },
    {
      title: "Market Cap",
      dataIndex: "market_cap",
      width: 50,
      key: "market_cap",
    },
    {
    title: "Current Price",
    dataIndex: "current_price",
    width: 50,
    key: "current_price",
  },
    
  ];

  return (
    <div style={{ marginLeft: "4em",marginRight:'4em' }}>
      <PageHeader
    className="site-page-header"
    
    title="Stock Details Table"

  />
 
  
      <div style={{ marginTop: "1em" }}>
        <Table
          {...tableData}
          columns={columns}
          dataSource={list}
          bordered={true}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
};
export default SampleTable;
