import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {type: 'doc', id: 'welcome', label: '欢迎', className: 'sidebar-icon-welcome'},
    {type: 'doc', id: 'contributing', label: '参与文档贡献', className: 'sidebar-icon-contributing'},
  ],
};

export default sidebars;
