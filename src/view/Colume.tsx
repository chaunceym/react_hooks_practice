import React, {useState, useEffect} from "react";
import {Column} from "@ant-design/charts";

const DemoColumn: React.FC = () => {
  const data = [
    {
      type: "家具家电",
      sales: 38,
    },
    {
      type: "粮油副食",
      sales: 52,
    },
    {
      type: "生鲜水果",
      sales: 61,
    },
    {
      type: "美容洗护",
      sales: 145,
    },
    {
      type: "母婴用品",
      sales: 48,
    },
    {
      type: "进口食品",
      sales: 38,
    },
    {
      type: "食品饮料",
      sales: 38,
    },
    {
      type: "家庭清洁",
      sales: 38,
    },
  ];
  const config = {
    data: data,
    xField: "type",
    yField: "sales",
    color: 'black',
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    meta: {
      type: {alias: "类别"},
      sales: {alias: "销售额"},
    },
  };
  // @ts-ignore
  return <Column {...config} />;
};

export default DemoColumn;
