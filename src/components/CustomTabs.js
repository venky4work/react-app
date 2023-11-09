import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CustomTabs({data}) {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

    <Tabs value={value} onChange={handleChange} aria-label="test">
      <Tab label={data[0]}></Tab>
      <Tab label={data[1]}></Tab>
    </Tabs>
    </>
  );
}