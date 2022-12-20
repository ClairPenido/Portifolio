import React from 'react';
import eu from '../style/eu.jpg';
import { FaHome } from 'react-icons/fa';
import { BiRightArrow } from 'react-icons/bi';



class AboutMe extends React.Component {
  render() {
    return (
      <section>
        <div className='titulo'>
          <FaHome className='seila' size='30px' color='#4A6685' />
          <h1>Sobre mim</h1>
        </div>
        <div className='content'>
          <div className='text'>
            <p>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit
              dahdsahdahhdsadhwah dhaudhwqhuaudauudha </p>
            <p> Algumas linguagens que venho utilizando em meus projetos: </p>
            <ul>
              <li><BiRightArrow className='icons'/> HTML </li>
              <li><BiRightArrow className='icons'/> CSS</li>
              <li><BiRightArrow className='icons'/> JavaScript</li>
            </ul>
          </div>
          <div className='wrapper'>
          <img className="photo" src={eu} alt="Foto Clair" width="200px" height="280px" />
          </div>
        </div>
      </section>
    );
  }
}
export default AboutMe;