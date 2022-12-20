import React from 'react';
import { ImGithub } from 'react-icons/im';
import { IoLogoLinkedin } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';



class InfoText extends React.Component {
  render() {
    return (
      <section>
        <div className="info-text">
          <h1>Oi, meu nome é</h1>
          <h2>Clair de Andrade Penido</h2>
          <p>Sou formada em Engenharia da Computação e, atualmente, estudo Desenvolvimento Web Full Stack na Trybe,
             que possui metodologia de ensino com intuito de provocar em seus alunos uma experiência real do dia a dia de trabalho de um desenvolvedor de software. Considero-me uma pessoa comunicativa e cooperativa e estou aberta a novas oportunidades no mercado de tecnologia. </p>
          <h3> Estou aberta a novas oportunidades no mercado de trabalho</h3>
          <div className='redes-sociais'>
          <a href="https://www.linkedin.com/in/clair-de-andrade-penido/" target='_blank'>
            <IoLogoLinkedin size='35px'/>
          </a>
          <a href="https://github.com/ClairPenido" target='_blank'>
            <ImGithub size='35px'/>
          </a>
          <a href="https://github.com/ClairPenido" target='_blank'>
            <SiGmail size='35px'/>
          </a>
          </div>
        </div>
      </section>
    );
  }
}
export default InfoText;