import React, { useState, useEffect } from 'react';
import Myjobs from './JobsInfos';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


import { BiRightArrow } from 'react-icons/bi';

export default function Jobs() {

  const [selectedJob, setSelectedJob] = useState('Primeiro Job');
  const [selectedInfo, setSelectedInfo] = useState([]);
  const [value, setValue] = useState(0);

  // const handleJobSelection = ({ target }) => {
  //   setSelectedJob(target.value);
  //   console.log('clicou', selectedJob);
  // }

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

  return (
    <section>
      <div>
        <h3>Experiências</h3>
        {/* <div className='container-jobs'>
          <Box
            sx={{
              width: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '& > *': {
                m: 1,
              },
            }}
          >
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="text"
            >
              {Myjobs &&
                Myjobs.jobs.map((j) => (
                  <label key={j.id} onClick={handleJobSelection}>
                    <Button size="medium" key={j.id} value={j.name}>{j.name}</Button>
                  </label>
                ))}
            </ButtonGroup>
          </Box>
          {selectedJob && selectedInfo.map((elem) => (
            <div className='jobDetails'>
              <span>{elem.occupation} </span>
              <span>{elem.where} </span>
              <h3>{elem.dateStart} {' - '} {elem.dateFinished}</h3>
              <ul>
                <li><BiRightArrow className='icons' /> {elem.activites0}</li>
                <li><BiRightArrow className='icons' /> {elem.activites1}</li>
              </ul>
            </div>
          ))}
          </div> */}
      </div>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
        <Tabs value={value} orientation='vertical' onChange={handleChange} aria-label="Vertical tabs example" sx={{ borderRight: 1, borderColor: 'divider' }}>
          {Myjobs &&
            Myjobs.jobs.map((j) => (
              <Tab value={j.id} label={j.id} />
            ))}
        </Tabs>
        {selectedJob && selectedInfo.map((elem) => (
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
