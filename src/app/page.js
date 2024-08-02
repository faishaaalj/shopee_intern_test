'use client'
import userDummy from './data/user';
import { Layout, Menu, theme, Table } from 'antd';
const { Header, Content, Sider, Footer } = Layout;


const itemsHeader = ['1', '2', '3'].map((key) => ({
  key,
  label: `Menu ${key}`,
}));

const itemsSider = ['1', '2', '3'].map((key) => ({
  key,
  label: `Side Menu ${key}`,
  children: new Array(4).fill(null).map((_, j) => {
    const subKey = key * 1 + j + 1;
    return {
      key: subKey,
      label: `Sub Side Menu ${subKey}`,
    };
  }),
}));

const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName'
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
]

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={itemsHeader}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={itemsSider}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Table
              columns = {columns}
              dataSource={userDummy}
            />
            
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
            >
            Crated by Faishal Januarahman for Shopee Intern Test ©
        </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Home;

