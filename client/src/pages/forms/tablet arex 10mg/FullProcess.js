import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BatchManufacturingFormPage1 from './dispensing/page1';


export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
          wrapped
        />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
      {/* Conditional rendering based on selected tab */}
      {value === 'one' && <div>New Arrivals Content</div>}
      {value === 'two' && <BatchManufacturingFormPage1 />} {/* Render your component here */}
      {value === 'three' && <div>Item Three Content</div>}
    </Box>
  );
}
