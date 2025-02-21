'use client'
import { Eye } from 'lucide-react'
import React from 'react'
import { useSidebar } from '../ui/sidebar'

const ToggleSideBarOpen = () => {

    const {
        setOpen,
    } = useSidebar()
    return (
        <div className='absolute bottom-10 bg-primary p-4 rounded-r-full cursor-pointer' onClick={() => setOpen(true)}>
            <Eye stroke='white' />
        </div>
    )
}

export default ToggleSideBarOpen