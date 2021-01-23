import React from 'react';
import { TabModel } from '../models/shared';
import { isLastIndexInArray } from '../utils/utils';
import { Tab } from './Tab';

interface HeaderProps {
  tabs: TabModel[];
}

export const Header: React.FC<HeaderProps> = ({ tabs }): JSX.Element => {
  return (
    <div className='header'>
      <div>KITA || PERSPEKTYVA</div>

      <br />

      <div className='navigation'>
        {tabs.map((tab, index) => (
          <Tab tab={tab} skipSeparator={isLastIndexInArray(tabs, index)} />
        ))}
      </div>
    </div>
  );
};
