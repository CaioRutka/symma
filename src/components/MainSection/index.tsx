"use client"
 
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"

import Image from 'next/image';

import Logo from '../../assets/images/5153-51.png';

export default function MainSection() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className='w-full h-full justify-center items-center flex flex-col sm:flex-row sm:pr-44 sm:pt-44'>
          <div className="w-full sm:w-7/12 h-7/12 justify-center items-center flex flex-col">
            <div className = "static sm:absolute top-52 left-52">
              
            </div>          
          </div>

          <div className = "w-full sm:w-5/12 h-7/12 sm:h-full justify-start items-center flex flex-col">
            <Card className="w-[350px] mb-20 mt-8 grid grid-rows-[min-content_1fr_min-content] sm:w-[600px] sm:h-[600px] sm:mb-12 sm:mt-12 bg-black bg-opacity-0 border-transparent">
              <CardHeader>
                <CardTitle className="text-white justify-center items-center flex flex-col font-lexend text-7xl sm:text-9xl">
                  Symma
                </CardTitle>
                <CardDescription className="pt-2 pl-20 text-white justify-center items-center flex flex-col font-lexend text-lg sm:text-2xl sm-pl-12">
                  Arquitetando soluções.
                </CardDescription>
                <CardDescription className="pt-0 pl-12 text-white justify-center items-center flex flex-col font-lexend text-lg sm:text-2xl sm-pl-0">
                 Transformando o futuro.
                </CardDescription>
                <CardDescription className="pt-6 pl-5 text-white font-lexend text-md sm:pl-12 sm:text-xl sm:pt-12">
                Com um compromisso apaixonado pela excelência, transformamos ideias em realidade, impulsionando 
                a evolução no fascinante universo da 
                <text className="text-[#01ffff] text-lg"> .IA</text> 
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center text-white">
                
              </CardFooter>
            </Card>
          </div>
        </div>
    )
  }
  