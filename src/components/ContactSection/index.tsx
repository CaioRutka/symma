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

export default function ContactSection() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className='w-full h-fit sm:h-full justify-center items-center flex flex-col'>
          <div className='box-border w-full sm:w-5/6 h-7/8 flex flex-col sm:flex-row '>
            <div className='box-border w-full h-full justify-start items-center flex flex-col pt-20'>         
              <div className='text-3xl sm:text-6xl pb-10 font-lexend text-white w-3/4 text-center'>
                Contato
              </div>              
            </div>
          </div>

          <div className='box-border w-full sm:w-5/6 h-full flex flex-col sm:flex-row justify-center items-center'>
          <div className = "w-full sm:w-5/12 h-full justify-center items-center flex flex-col pb-20">
            <Card className="w-7/8 sm:w-full grid grid-rows-[min-content_1fr_min-content]">
              <CardHeader>
                <CardTitle className="flex justify-center">Busque sua solução</CardTitle>
                <CardDescription className="flex justify-center">Entre em contato com nosso time.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4 ">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Nome Completo" />
                    </div>    
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Email</Label>
                      <Input id="name" placeholder="Email" />
                    </div>    
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Telefone</Label>
                      <Input id="name" placeholder="Telefone" />
                    </div>  
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Assunto</Label>
                      <Input id="name" placeholder="Assunto" />
                    </div>                       
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center pt-10">
                <Button className="w-full">Enviar</Button>
              </CardFooter>
            </Card>
          </div>
          </div>
          
          
        </div>
    )
  }
  