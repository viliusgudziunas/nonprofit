import React from 'react';
import { TabModel } from '../models/shared';

interface TabProps {
  tab: TabModel;
  skipSeparator?: boolean;
}

export const Tab: React.FC<TabProps> = ({ tab, skipSeparator }) => {
  return (
    <div key={tab.name} className='nav-tab'>
      <div>{tab.name}</div>
      {skipSeparator || <div className='nav-gap'>|</div>}
    </div>
  );
};
