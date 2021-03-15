import { Paper, Tab, Tabs } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { RouteModel } from '../models/shared';

interface HeaderProps {
  tabs: RouteModel[];
}

export const Header: React.FC<HeaderProps> = ({ tabs }): JSX.Element => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper className='header'>
        <img src={logo} alt='headerLogo' className='logo' />
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          {tabs.map((tab) => (
            <Tab
              component={Link}
              className='tab'
              label={tab.name}
              to={tab.path}
              key={tab.path}
            />
          ))}
        </Tabs>
      </Paper>
    </>
  );
};
