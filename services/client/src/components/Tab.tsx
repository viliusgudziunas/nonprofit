import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteModel } from '../models/shared';

interface TabProps {
  tab: RouteModel;
  skipSeparator?: boolean;
}

export const Tab: React.FC<TabProps> = ({ tab, skipSeparator }) => {
  return (
    <div key={tab.name} className='nav-tab'>
      <NavLink exact className='nav-link' to={tab.path}>
        {tab.name}
      </NavLink>
      {skipSeparator || <div className='nav-gap'>|</div>}
    </div>
  );
};
