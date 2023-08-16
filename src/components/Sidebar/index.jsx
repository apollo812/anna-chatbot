import React from 'react';
import Logo1 from '../../assets/images/logo1.png';
import Logo2 from '../../assets/images/logo2.png';
import Icons from '../Icons';
import './sidebar.scss';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ setOpen }) => {
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <div className="sidebar-main">
        <div className="sidebar-header">
          <h1 className="text-white font-200">Anna</h1>
          {/* <img src={Logo1} alt="logo1" />
          <img src={Logo2} alt="logo2" /> */}
        </div>
        <div className="create-chat-ticket">
          <div>
            <Icons icon="Plus" size={20} />
            <span className="text-white">{t('New Chat')}</span>
          </div>
          <button className="flex lg:hidden" onClick={() => setOpen(false)}>
            <Icons icon="Close" size={24} fill="white" />
          </button>
        </div>
      </div>
      <div className="sidebar-footer">dddd</div>
    </div>
  );
};

export default Sidebar;
