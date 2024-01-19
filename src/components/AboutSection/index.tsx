import Image from 'next/image';

import Clinic from '../../assets/images/Leonardo_Vision_XL_an_artistic_portrayal_of_artificial_intelli_1.jpg';

export default function AboutSection() {
    return (
        <div className='w-full h-fit sm:h-full justify-center items-center flex flex-col bg-black border-b-2 border-[#2fc6c6]'>
          <div className='box-border w-full sm:w-5/6 h-full flex flex-col sm:flex-row'>
            <div className='box-border w-full sm:w-1/2 h-full justify-center items-center flex flex-col p-10 sm:p-0'>
              <Image
                src = {Clinic}
                alt = "Clinic"
                style={{ width: 'auto', height: '50%', zIndex: 10, borderRadius: 20 }}
              />
            </div>
            <div className='box-border w-full sm:w-1/2 h-full justify-center items-center flex flex-col'>   
              <div className='text-md sm:text-xl font-lexend text-white w-3/4'>
                Somos Especialistas em Tecnologia
              </div>          
              <div className='text-3xl sm:text-6xl pb-10 font-lexend text-[#2fc6c6] w-3/4'>
                Conheça a Symma
              </div>
              <div className='text-md sm:text-xl font-extralight leading-none tracking-tight text-justify z-10 font-lexend text-white w-3/4'>
                Pioneira em Inteligência Artificial, nossa expertise está em arquitetar soluções inovadoras para desafios complexos no universo da IA. 
                Transformamos visões em realidade, impulsionando o futuro da tecnologia com criatividade e excelência.
              </div>
              <br></br>
              <div className='text-md sm:text-xl font-extralight leading-none tracking-tight text-justify z-10 font-lexend text-white w-3/4 pb-10'>
                O diferencial da Symma reside na sua abordagem inovadora e compromisso em criar soluções de inteligência artificial que vão além das expectativas. 
                Com uma equipe dedicada e experiente, a Symma destaca-se pela capacidade de arquitetar soluções personalizadas e eficientes, adaptadas aos desafios específicos de seus clientes. 
                A empresa prioriza a criatividade, a excelência técnica e a busca constante por avanços no campo da IA, estabelecendo-se como uma referência no setor pela qualidade e inovação de suas entregas.
              </div>
              
            </div>
          </div>
        </div>
    )
  }
  