import React from 'react';
import { Layout, Menu, PageHeader, PageHeaderProps } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header } = Layout;

const HeaderNav = () => {
    const navigate = useNavigate();

    return (
        <Header style={{ position: 'fixed', zIndex: 2, width: '100%' }}>
            <Menu
                theme="dark"
                mode="horizontal"
                items={[{
                    key: 1,
                    label: `Home`,
                    onClick: () => {navigate('/')}
                },{
                    key: 2,
                    label: `Search`,
                    onClick: () => {navigate('/search')}
                }]}
            />
        </Header>
    );
}

export default HeaderNav;
