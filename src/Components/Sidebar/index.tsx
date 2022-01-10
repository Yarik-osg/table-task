import {SidebarBlock, MenuBlock} from './styles';

import {UnorderedListOutlined, UserOutlined} from '@ant-design/icons';

/**
 * The main function that completely renders the sidebar that is on each of the pages, has 2 buttons to switch between our pages
 *
 */
const Sidebar = () => {

    return (
        <SidebarBlock>
            <MenuBlock theme={'dark'}>
                <MenuBlock.Item key="Home" icon={<UserOutlined/>}>
                    <a data-testid="home" href='/home'>
                        <span data-testid="span-home">Home</span>
                    </a>
                </MenuBlock.Item>
                <MenuBlock.Item key="Table" icon={<UnorderedListOutlined/>}>
                    <a data-testid="table" href='/table' >
                       <span data-testid="span-table">Table</span>
                    </a>
                </MenuBlock.Item>
            </MenuBlock>
        </SidebarBlock>
    );
};
export default Sidebar;
