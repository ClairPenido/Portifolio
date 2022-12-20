import React, { useState, useEffect } from 'react';
import Myjobs from './JobsInfos';
import { BiRightArrow } from 'react-icons/bi';

export default function Jobs() {

  const [selectedJob, setSelectedJob] = useState('Primeiro Job');
  const [selectedInfo, setSelectedInfo ] = useState([]);
  const handleJobSelection = ({ target }) => {
    setSelectedJob(target.value);
    console.log('clicou', selectedJob);
  }

  const changeJob = () => {
    const onlySelected = Myjobs.jobs.filter((selected) => selected.name === selectedJob);
    console.log('funcionou', onlySelected);
    setSelectedInfo(onlySelected);
  }

  useEffect(() => {
   changeJob();
  }, [selectedJob]);

  return (
    <section>
      <div>
        <h3>Experiências</h3>
        <div className='container-jobs'>
          <div className='selectJobs'>
            {Myjobs && 
              Myjobs.jobs.map((j) => (
              <label key={j.id} onClick={handleJobSelection}>
                <input type="radio" name='job' value={j.name} hidden />
                {j.name}
              </label>
            ))}
          </div>
            {selectedJob && selectedInfo.map((elem) => (
              <div className='jobDetails'>
                <span>{elem.occupation} </span>
                <span>{elem.where} </span>
              <h3>{elem.dateStart} {' - '} {elem.dateFinished}</h3>
              <ul>
              <li><BiRightArrow className='icons'/> {elem.activites0}</li>
              <li><BiRightArrow className='icons'/> {elem.activites1}</li>
            </ul>
            </div>
            ))}
          
        </div>

      </div>
    </section>
  )
};
