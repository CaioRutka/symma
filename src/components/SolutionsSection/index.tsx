import Image from 'next/image';

import Clinic from '../../assets/images/logo.png';

export default function ContactSection() {
    return (
        <div className='w-full h-fit sm:h-full justify-center items-center flex flex-col bg-black'>
          <div className='box-border w-full sm:w-5/6 h-7/8 flex flex-col sm:flex-row '>
            <div className='box-border w-full h-full justify-start items-center flex flex-col pt-20'>   
              <div className='text-md sm:text-2xl font-lexend text-white w-3/4 text-center'>
                Nossas Soluções
              </div>          
              <div className='text-3xl sm:text-6xl pb-10 font-lexend text-[#2fc6c6] w-3/4 text-center'>
                Ecossistema Symma
              </div>              
            </div>
          </div>

          <div className='box-border w-full sm:w-5/6 h-full flex flex-col sm:flex-row'>
            <div className='w-full sm:w-5/6 h-full flex flex-col'>
              <div className='w-full h-1/2 flex flex-col justify-center items-center pb-10'>
                <div className='text-md sm:text-lg font-lexend text-white w-3/4 text-center sm:text-end'>
                  IA Casino e Gambling
                </div>          
                <div className='text-3xl sm:text-3xl pb-2 font-lexend text-[#2fc6c6] w-3/4 text-center sm:text-end'>
                  Elgos
                </div>   
                <div className='text-md sm:text-sm font-lexend font-extralight text-white w-3/4 text-center sm:text-end'>
                  Elevamos o padrão do entretenimento digital, oferecendo uma abordagem inteligente para um setor dinâmico, onde a confiança e a inovação são fundamentais. 
                </div>    
                <div className='text-md sm:text-sm font-lexend font-extralight text-white w-3/4 text-center sm:text-end'>
                  Descubra o futuro do gambling com a Elgos - onde a inteligência artificial redefine a experiência do jogo.
                </div>                  
              </div>
              <div className='w-full h-1/2 flex flex-col justify-center items-center'>
                <div className='text-md sm:text-lg font-lexend text-white w-3/4 text-center sm:text-end'>
                  Inteligencia Artificial
                </div>          
                <div className='text-3xl sm:text-3xl pb-2 font-lexend text-[#2fc6c6] w-3/4 text-center sm:text-end'>
                  Sectur
                </div>   
                <div className='text-md sm:text-sm font-lexend font-extralight text-white w-3/4 text-center sm:text-end'>
                  Sectur é a integração de diversas tecnologias funcionais, que impulsionam um setor, uma economia e um pais. 
                </div>                     
              </div>
            </div>
            <div className='w-full sm:w-5/6 h-full flex flex-col justify-center items-center sm:flex-row '>
              <Image
                src = {Clinic}
                alt = "Clinic"
                style={{ width: 'auto', height: '50%', zIndex: 10 }}
              />
            </div>
            <div className='w-full sm:w-5/6 h-full flex flex-col'>
              <div className='w-full h-1/2 flex flex-col justify-center items-center text-center sm:text-start pb-10'>
                <div className='text-md sm:text-lg font-lexend text-white w-3/4 text-center sm:text-start'>
                  Inteligencia Artificial
                </div>          
                <div className='text-3xl sm:text-3xl pb-2 font-lexend text-[#2fc6c6] w-3/4 text-center sm:text-start'>
                  Symma
                </div>   
                <div className='text-md sm:text-sm font-lexend font-extralight text-white w-3/4 text-center sm:text-start'>
                  Somos uma empresa líder em desenvolvimento de soluções tecnológicas implementação de IA, Chatbot, Sistemas e Soluções em blockchain.
                </div>                     
              </div>

              <div className='w-full h-1/2 flex flex-col justify-center items-center pb-10'>
                <div className='text-md sm:text-lg font-lexend text-white w-3/4 text-center sm:text-start'>
                  IA Casino e Gambling
                </div>          
                <div className='text-3xl sm:text-3xl pb-2 font-lexend text-[#2fc6c6] w-3/4 text-center sm:text-start'>
                  Elgos
                </div>   
                <div className='text-md sm:text-sm font-lexend font-extralight text-white w-3/4 text-center sm:text-start'>
                  Elevamos o padrão do entretenimento digital, oferecendo uma abordagem inteligente para um setor dinâmico, onde a confiança e a inovação são fundamentais. 
                </div>    
                <div className='text-md sm:text-sm font-lexend font-extralight text-white w-3/4 text-center sm:text-start'>
                  Descubra o futuro do gambling com a Elgos - onde a inteligência artificial redefine a experiência do jogo.
                </div>                  
              </div>
            </div>
          </div>
          
          
        </div>
    )
  }
  