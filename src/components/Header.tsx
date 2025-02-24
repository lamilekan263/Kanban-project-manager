'use client'
import React from 'react'
import Typography from './Typography'
import { Button } from './ui/button'
import { EllipsisVertical, PlusIcon } from 'lucide-react'
import LogoComponent from './Logo'
import { useSidebar } from './ui/sidebar'

const Header = () => {
    const {
        open
    } = useSidebar()
    return (
        <nav className=' flex items-center  h-24 md:h-20 w-full bg-dashboard-background'>
            <div className=' p-6 flex justify-between items-center flex-1'>

                <div className='flex items-center gap-2'>
                    {!open && <LogoComponent />}
                    {/* <Image src={Logo} alt="Logo Image of kanban" className='block md:hidden' /> */}
                    <Typography variant='xl'>
                        Platform Launch
                    </Typography>
                </div>
                <div className='flex items-center space-x-4'>
                    <Button className='bg-primary rounded-full'>
                        <PlusIcon className='font-bold' />
                        <Typography variant='m' className='hidden md:block'>
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