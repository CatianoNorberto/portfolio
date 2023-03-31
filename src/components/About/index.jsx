import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}> 
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row 
        lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[660px] mix-blend-lighten bg-top'
          ></motion.div>
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>Sobre mim</h2>
            <h3 className='h3 mb-4'>Sou Desenvolvedor Front-end e Freelancer com mais de 3 anos de experiência</h3>
            <p className='mb-6 text-[18px]'>
              Iniciei os meus estudos na programação em 2017 quando comecei o curso de <span className='text-gradient'>Engenharia da Computação</span>, 
              sempre me interessei muito por assuntos relacionados à tecnologia desde pequeno, 
              por esse fator nunca me faltou dúvidas de que minha carreira profissional iria seguir por essa área.
            </p>
            <p className='mb-6 text-[18px]'>
              A partir do momento que fui me aprofundando na área, decidi que iria me dedicar a aprender mais sobre JavaScript e 
              desenvolvimento Frontend e logo ja me indentiquei muito tanto com a linguagem quanto o setor.
            </p>
            <div>
              <div className='flex gap-x-6 lg:gap-x-10'>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={3}/> : null}
                  <div className='font-primary text-sm tracking-[2px]'>
                    Year of <br/> Experience
                  </div>
                </div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={9} duration={3}/> : null}
                  k+
                  <div className='font-primary text-sm tracking-[2px]'>
                    Projects<br/> Completed
                  </div>
                </div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={3}/> : null}
                  k+
                  <div className='font-primary text-sm tracking-[2px]'>
                    Satisfied <br/> Clients
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
