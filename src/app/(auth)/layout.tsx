import LogoComponent from '@/components/Logo'
import React from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='h-screen overflow-hidden p-6 grid md:grid-cols-3'>
            <div className="hidden md:block bg-primary  rounded-r-2xl">
                <LogoComponent />
            </div>
            <div className="col-span-2 ">
                <LogoComponent />
                <div className='flex h-full items-center justify-center w-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout