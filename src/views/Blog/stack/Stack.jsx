import React from 'react';
import { Table, Rate } from 'antd';

function Stack() {
  const dataSource = [
    {
      key: '1',
      stack: 'C++',
      proficiency: '3',
      projectName: '学生管理系统',
      projectContent: '面向学生、老师、课代表三类用户，实现增删改查、排序、清空数据等功能',
    },
    {
      key: '2',
      stack: 'HTML/CSS/JS',
      proficiency: '4',
      projectName: '明星介绍网站',
      projectContent: '实现页面跳转、页面自适应、Post/Get、锚点、定位、浮动等功能',
    },
    {
      key: '3',
      stack: 'React',
      proficiency: '3',
      projectName: '个人博客（本博客）',
      projectContent: '使用路由、hook函数、Ant Design组件库实现页面渲染以及路由跳转等功能',
    },
    {
      key: '4',
      stack: 'MySql数据库',
      proficiency: '4',
      projectName: '渔船进销存系统',
      projectContent: '使用ER图建模、MySQL建表、连表，实现增删改查等基本功能',
    },
    {
      key: '5',
      stack: 'Oracle数据库',
      proficiency: '3',
      projectName: '银行账户管理系统',
      projectContent: '使用ER图建模、ALG/PLSQL建表、连表，实现增删改查等基本功能',
    },
    {
      key: '6',
      stack: 'WordPress',
      proficiency: '4',
      projectName: '某医药公司官网',
      projectContent: '通过低代码建站，完成对公司官网的搭建以及公司域名的备案注册',
    },
    {
      key: '7',
      stack: 'Hadoop大数据分析',
      proficiency: '3',
      projectName: '某电商双十一数据可视化',
      projectContent: 'Map/Reduce以及JavaWeb实现对数据的分析并可视化数据',
    },
    {
      key: '8',
      stack: 'Python大数据爬虫',
      proficiency: '3',
      projectName: '爬取某平台二手房数据',
      projectContent: '使用python爬取某平台二手房数据，通过对数据的过滤，分析最终数据并展示饼状图、柱状图',
    },
  ];

  const columns = [
    {
      title: '技术栈',
      dataIndex: 'stack',
      key: 'stack',
    },
    {
      title: '熟练程度',
      dataIndex: 'proficiency',
      key: 'proficiency',
      render: (text) => (
        <Rate disabled defaultValue={getRatingValue(text)} />
      ),
    },
    {
      title: '项目名称',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: '项目内容',
      dataIndex: 'projectContent',
      key: 'projectContent',
    },
  ];

  // Helper function to convert proficiency text to rating value
  const getRatingValue = (proficiency) => {
    switch (proficiency) {
      case '1':
        return 1;
      case '2':
        return 2;
      case '3':
        return 3;
      case '4':
        return 4;
      case '5':
        return 5;
      default:
        return 0;
    }
  };

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
}

export default Stack;
