import React from 'react'
import Typography from './Typography'
import Logo from "../../public/Logo.svg"
import Image from 'next/image'



const LogoComponent = () => {
    return (
        <div className="flex gap-2 p-6">
            <Image src={Logo} alt="Logo Image of kanban" />
            <Typography variant="xl" className=''>Kanban</Typography>
        </div>
    )
}

export default LogoComponent