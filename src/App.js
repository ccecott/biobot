import HeaderComp from './components/HeaderComp'
import Calendar from './components/Calendar'
import Data from './components/Data'
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;





function App() {

  return (
    <Layout className="mainLayout">
    <Header>
     <HeaderComp /> 
      
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '400px' }}>
      <Calendar />
      <Data />

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Biobot Analytics ©2021</Footer>
  </Layout>
    // <div className='container'>

      
      
    // </div>
  
  )
}



export default App;
