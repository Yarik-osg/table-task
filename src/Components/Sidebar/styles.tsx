import styled from "styled-components";

import { Menu } from "antd";

const SidebarBlock = styled.div`
  border-color: #bfbfbf;
  background-color: #f5f5f5;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

const MenuBlock = styled(Menu)`
  width: 200px;
  height: 100%;
  padding-top: 80px;
`;

export { SidebarBlock, MenuBlock};
