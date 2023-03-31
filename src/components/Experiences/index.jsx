import React from 'react'

export default function Experiences() {
  return (
    <section className='section mt-6 h-[800px]' id='experiences'>
        <div className='container mx-auto'>
            <h2 className='h2 text-center text-accent mb-20'>
             Experiencias
            </h2>
            <div className='flex flex-col lg:flex-row gap-x-8'>
                <div className='flex-1'>
                    <h2 className='h2 border-l-4 px-2 mb-15'>Acadêmica</h2>
                    <div>
                        <div className='flex gap-x-6 items-center mb-12'>
                            <div 
                                className='flex items-center justify-center bg-unip bg-origin-content p-4 bg-no-repeat bg-center
                                group relative overflow-hidden border-2 border-white/50 rounded w-24 h-24'
                            >
                                {/* <Tooltip></Tooltip> */}
                            </div>
                            <div>
                                <h2 className=''>UNIP - Universidade Paulista | Ensino Presencial e a Distancia</h2>
                                <h4 className=''>Fevereiro - 2021 | Dezembro - 2024</h4>
                            </div>
                        </div>
                        <div className='flex gap-x-6 items-center mb-12'>
                            <div 
                                className='flex items-center justify-center bg-edessa bg-origin-content p-4 bg-no-repeat bg-center
                                group relative overflow-hidden border-2 border-white/50 rounded w-24 h-24'
                            >
                                
                            </div>
                            <div>
                                <h2 className=''>Edessa - Ensino Médio</h2>
                                <h4 className=''>Fevereiro - 2015 | Dezembro - 2017</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='h2 border-l-4 px-2 mb-15'>Cursos</h2>
                        <div className='flex gap-x-6 items-center mb-12'>
                            <div 
                                className='flex items-center justify-center bg-rocketseat bg-origin-content p-4 bg-no-repeat bg-center
                                group relative overflow-hidden border-2 border-white/50 rounded w-24 h-24'
                            >
                                
                            </div>
                            <div>
                                <h2 className=''>Rocketseat</h2>
                                <h4 className=''>cursando ...</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <h2 className='h2 border-l-4 px-2 mb-15'>Profissional</h2>
                    <div>
                        <div className='flex gap-x-6 items-center mb-12'>
                            <div 
                                className='flex items-center justify-center bg-firgun bg-origin-content p-4 bg-no-repeat bg-center
                                group relative overflow-hidden border-2 border-white/50 rounded w-24 h-24'
                            >
                                {/* <img src={LogoFigun} alt=""/> */}
                            </div>
                            <div>
                                <h2 className=''>Firgun</h2>
                                <h4 className=''>Julho - 2021 | Janeiro - 2023</h4>
                            </div>
                        </div>
                        <div className='flex gap-x-6 items-center mb-12'>
                            <div 
                                className='flex items-center justify-center bg-nvgo bg-origin-content p-4 bg-no-repeat bg-center
                                group relative overflow-hidden border-2 border-white/50 rounded w-24 h-24'
                            >
                                {/* <img src={LogoNvgo} alt=""/> */}
                            </div>
                            <div>
                                <h2 className=''>Nvgo</h2>
                                <h4 className=''>Junho - 2021 | Abril - 2022</h4>
                            </div>
                        </div>
                        <div className='flex gap-x-6 items-center mb-12'>
                            <div 
                                className='flex items-center justify-center bg-meza bg-origin-content p-4 bg-no-repeat bg-center
                                group relative overflow-hidden border-2 border-white/50 rounded w-24 h-24'
                            >
                                {/* <img src={LogoMeza} alt=""/> */}

                            </div>
                            <div>
                                <h2 className=''>Grupo Meza Tecnologias Ltda</h2>
                                <h4 className=''>Março - 2021 | Junho - 2021</h4>
                            </div>
                        </div>
                        <div className='flex gap-x-6 items-center mb-12'>
                            <div 
                                className='flex items-center justify-center bg-ids bg-origin-content p-4 bg-no-repeat bg-center
                                group relative overflow-hidden border-2 border-white/50 rounded w-24 h-24'
                            >
                                {/* <img src={LogoIds} alt=""/> */}
                            </div>
                            <div>
                                <h2 className=''>Ids-estudantes projetos de novos quadros</h2>
                                <h4 className=''>Janeiro - 2019 | Dezembro - 2019</h4>
                            </div>
                        </div>
                        <div className='flex gap-x-6 items-center mb-12'>
                            <div 
                                className='flex items-center justify-center bg-unasp bg-origin-content p-4 bg-no-repeat bg-center
                                group relative overflow-hidden border-2 border-white/50 rounded w-24 h-24'
                            >
                                {/* <img src={LogoUnasp} alt=""/> */}
                            </div>
                            <div>
                                <h2 className=''>Unasp-Sp</h2>
                                <h4 className=''>Janeiro - 2018 | Dezembro - 2019</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
