import {SidebarBlock, MenuBlock} from './styles';

import {UnorderedListOutlined, UserOutlined} from '@ant-design/icons';

const Sidebar = () => {

    return (
        <SidebarBlock>
            <MenuBlock theme={'dark'}>
                <MenuBlock.Item key="Home" icon={<UserOutlined/>}>
                    <a href='/home'>
                        Home
                    </a>
                </MenuBlock.Item>
                <MenuBlock.Item key="Table" icon={<UnorderedListOutlined/>}>
                    <a href='/table'>
                        Table
                    </a>
                </MenuBlock.Item>

            </MenuBlock>
        </SidebarBlock>
    );
};
export default Sidebar;
