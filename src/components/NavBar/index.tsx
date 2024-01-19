"use client"; 
import Image from 'next/image';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react';

import Logo from '../../assets/images/Synergy of Serra Genesis.lnk.png';
import HamburguerIcon from '../../assets/svg/hamburger-menu.svg';
import CloseIcon from '../../assets/svg/close.svg';

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-black border-b-2 border-[#2fc6c6] pb-2">
            <div className="justify-between px-4 mx-auto lg:max-w-9xl md:items-center md:flex md:px-8">        
                <div>
                    <div className="flex items-center justify-between pt-1 md:block sm:pl-52">
                        {/* LOGO */}
                        <Link href="/">
                            <Image
                                src = {Logo}
                                width = {220}
                                alt = "Logo"
                            />
                        </Link>
                        {/* HAMBURGER BUTTON FOR MOBILE */}
                        <div className="md:hidden">
                          <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                          >
                            {navbar ? (
                              <Image src={CloseIcon} width={30} height={30} alt="logo" />
                            ) : (
                              <Image
                                src={HamburguerIcon}
                                width={30}
                                height={30}
                                alt="logo"
                                className="focus:border-none active:border-none"
                              />
                            )}
                          </button>
                        </div>
                    </div>
                </div>
        
                <div>
                    <div
                      className={`flex-1 justify-self-center pb-3 mt-8 pr-52 md:block md:pb-0 md:mt-0 ${
                        navbar ? 'p-12 md:p-0 block' : 'hidden'
                      }`}
                    >
                        <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                            <Link className='justify-between items-center pl-4 m-15 pt-1' href="/">
                                <div className="text-white text-lg md:text-base font-lexend font p-3">
                                    Home
                                </div>
                            </Link>
                  
                            <Link className='justify-between items-center pl-4 m-15 pt-1' href="/">
                                <div className="text-white text-lg md:text-base font-lexend p-3">
                                    About
                                </div>
                            </Link>
                  
                            <Link className='justify-between items-center pl-4 m-15 pt-1' href="/">
                                <div className="text-white text-lg md:text-base font-lexend p-3">
                                    Ecosistema
                                </div>
                            </Link>
                  
                            <Link className='justify-between items-center pl-4 m-15 pt-1' href="/">
                                <div className="text-white text-lg md:text-base font-lexend p-3">
                                    Contato
                                </div>
                            </Link>
                  
                            <div className='flex flex-row justify-start items-center pl-3 pt-12 sm:pt-0 sm:pl-6'>
                                <SocialIcon url="https://www.facebook.com/" style={{ height: 30, width: 30 }} bgColor="#01ffff" fgColor="#000" target="_blank"/>
                                <SocialIcon url="https://www.instagram.com//" style={{ height: 30, width: 30, marginLeft: 15}} bgColor="#01ffff" fgColor="#000" target="_blank"/>
                                <SocialIcon url="https://w.app/" style={{ height: 30, width: 30, marginLeft: 15}} bgColor="#01ffff" fgColor="#000" target="_blank"/>
                            </div>
                        </ul>
                    </div>
                </div>    
            </div>
        </nav>
    )
  }
  