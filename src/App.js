import { Layout, Menu, Breadcrumb } from 'antd';
import CharacterDetail from "./components/CharacterDetail"
import Characters from "./components/Characters"
import EpisodeDetail from "./components/EpisodeDetail"
import Episodes from "./components/Episodes"
const { Header, Content, Sider } = Layout;

const App=()=> {
  return (
    <div>
    <Layout>
        <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  
     </Layout>
     <Layout style={{ padding: '0 24px 24px' }}>

     <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
     {/* <EpisodeDetail/>
  <CharacterDetail/> */}
  <Episodes/>
  <Characters/>
        </Content>
        </Layout>
        </div>
  );
}

export default App;
