import React from 'react'
import Logo from "../../public/Logo.svg"
import Typography from './Typography'
import { Button } from './ui/button'
import { EllipsisVertical, PlusIcon } from 'lucide-react'
import Image from 'next/image'
import { Separator } from './ui/separator'

const Header = () => {
    return (
        <nav className=' flex items-center  h-16'>
            <div className=' h-full p-6 flex items-center border-r-2 border-r-neutral-400 w-[296px]'>
                {/* <h1>Hello</h1> */}
                <Image src={Logo} alt="Logo Image of kanban" />
            </div>
            <div className=' p-6 flex justify-between items-center flex-1'>
                <Typography variant='xl'>
                    Platform Launch
                </Typography>
                <div className='flex items-center space-x-4'>
                    <Button className='bg-primary rounded-full'>
                        <PlusIcon className='font-bold' />
                        <Typography variant='m'>
                            Add New Task
                        </Typography>
                    </Button>
                    <EllipsisVertical color='#828FA3' />
                </div>
            </div>
        </nav>
    )
}

export default Header