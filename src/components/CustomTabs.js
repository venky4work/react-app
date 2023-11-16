import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CustomTabs({data}) {
  const [value, setValue] = React.useState(data[0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

    <Tabs value={value} onChange={handleChange} aria-label="test" indicatorColor="secondary">
      <Tab label={data[0]} key={data[0]} value={data[0]} sx={{
      textTransform: 'none',
    }}></Tab>
      <Tab label={data[1]} key={data[1]} value={data[1]} sx={{
      textTransform: 'none',
    }}></Tab>
    </Tabs>
    </>
  );
}