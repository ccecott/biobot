import PropTypes from 'prop-types'
import { Menu } from 'antd';


const Header = ({ title }) => {
 
    return (
        
        <div className='container-fluid'>
        <div className='header'>
        <div className="logo" />
      <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact Us</Menu.Item>
      </Menu>
            <h1 style={{ textAlign: 'center', paddingTop: '200px', fontSize: '3rem'}}>{title}</h1>
        </div>
        </div>
    )
    

}

Header.defaultProps = {
    title: 'COVID-19 Data',
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;
