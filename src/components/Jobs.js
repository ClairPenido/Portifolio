import React, { useState, useEffect } from 'react';
import Myjobs from './JobsInfos';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Container from '@mui/system/Container';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


import { BiRightArrow } from 'react-icons/bi';

export default function Jobs() {

  const [selectedInfo, setSelectedInfo] = useState([]);
  const [value, setValue] = useState(0);

  const changeJob = () => {
    const onlySelected = Myjobs.jobs.filter((selected) => selected.id === value);
    console.log('funcionou', onlySelected);
    setSelectedInfo(onlySelected);
  }

  useEffect(() => {
    changeJob();
  }, [value]);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box className='jobDetails' sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TestTabs = styled(Tabs)({
    // borderLeft: '1px solid #F6E0C2',
    '& .MuiTabs-indicator': {
      backgroundColor: '#4A6685',
    },
  });

  const TestTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginTop: theme.spacing(1),
    color: 'rgba(255,255,255, 1)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#4A6685',
      opacity: 1,
      backgroundColor: 'rgba(246, 224, 194, 0.3)',
    },
    '&.Mui-selected': {
      color: '#4A6685',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#F6E0C2',
    },
  }));

  return (
    <section>
      <div>
        <h3>Experiências</h3>
      </div>
      <Box border="1px solid black" sx={{ flexGrow: 1, display: 'flex', height: 250, width: 'auto'}}>
        <TestTabs value={value} orientation='vertical' onChange={handleChange} sx={{ display: 'flex', borderRight: 1, borderColor: 'divider' }}>
          {Myjobs &&
            Myjobs.jobs.map((j) => (
              <TestTab value={j.id} label={j.name}/>
            ))}
        </TestTabs>
        { selectedInfo.map((elem) => (
          <TabPanel value={elem.id} index={elem.id}>
            <span>{elem.occupation} </span>
            <span>{elem.where} </span>
            <h3>{elem.dateStart} {' - '} {elem.dateFinished}</h3>
            <ul>
              <li><BiRightArrow className='icons' /> {elem.activites0}</li>
              <li><BiRightArrow className='icons' /> {elem.activites1}</li>
            </ul>
          </TabPanel>
        ))}
      </Box>
    </section>
  )
};
