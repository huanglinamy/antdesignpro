import React from 'react';
import { Table, Divider, Tag, Modal, notification, Button } from 'antd';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

const columns = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
  render: text => <a href="javascript:;">{text}</a>,
},{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },{
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },{
    title: 'Pic',
    key: 'pic',
    dataIndex: 'pic',
    render: pic => (
      <span>
        {pic.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
      </span>
    ),
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  }, {
    title: 'More',
    key: 'more',
    render: (text, record) => (
      <span>
        <a href="javascript:;">data:{JSON.stringify(record)}</a>
        <Divider type="vertical" />
        <a href="javascript:void(0);" onClick={this.showModal}>Edit</a>
      </span>
    ),
  }];

const data = [{
  key: '1',
  id:'1',
  name: '西北旺地铁',
  address: '北京市西北旺地铁站',
  city:'北京',
  pic: ['nice'],
}, {
  key: '2',
  id:'2',
  name: '东北旺店',
  address: '北京市东北旺站店',
  city:'上海',
  pic: ['good'],
}, {
  key: '3',
  id:'3',
  name: '南北旺铁',
  address: '北京市南北旺地铁',
  city:'广州',
  pic: ['cool'],
},{
  key: '4',
  id:'4',
  name: '西北旺地',
  address: '北京市西北旺地铁',
  city:'东京',
  pic: ['nice'],
}, {
  key: '5',
  id:'5',
  name: '南北旺',
  address: '北京市南北旺',
  city:'海南',
  pic: ['good'],
}, {
  key: '6',
  id:'6',
  name: '东北旺角',
  address: '北京市东北旺地铁站',
  city:'太原',
  pic: ['good'],
}, {
  key: '7',
  id:'7',
  name: '东北旺',
  address: '北京市东北旺地铁站',
  city:'太原',
  pic: ['good'],
}, {
  key: '8',
  id:'8',
  name: '东北旺角',
  address: '北京市东北旺地铁站',
  city:'太原',
  pic: ['nice'],
}];


class ShopList extends React.PureComponent{
  columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },{
    title: '门店名称',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  }, {
    title: '门店图片',
    key: 'pic',
    dataIndex: 'pic',
    render: pic => (
      <span>
        {pic.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
      </span>
    ),
  }, {
    title: '门店状态',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">{record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  }, {
    title: '操作',
    key: 'more',
    render: (text, record) => (
      <span>
        {/* <a href="javascript:;">data:{JSON.stringify(record)}</a> */}
        <a href="javascript:;">编辑</a>
        <Divider type="vertical" />
        <a href="javascript:void(0);">关闭</a>
        {/* <a href="javascript:void(0);" onClick={this.showModal}>Edit</a> */}
      </span>
    ),
  }];
  state = {
    visible: false
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }
  render(){
    return <React.Fragment>
      <Table columns={this.columns} dataSource={data} pagination={{pageSize: 8}}></Table>
      <Modal
        title="Modal"
        visible={this.state.visible}
        onOk={this.hideModal}
        onCancel={this.hideModal}
        okText="确认"
        cancelText="取消"
      >

      </Modal>
      <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
    </React.Fragment>
  }
}


export default ShopList;
