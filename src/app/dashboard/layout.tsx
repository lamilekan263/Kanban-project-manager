import Header from '@/components/Header'
import React from 'react'
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/App-sidebar/app-sidebar'
import ToggleSideBarOpen from '@/components/App-sidebar/ToggleSideBarOpen'


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className='w-full'>
                <Header />
                <main className='bg-primary-light h-screen' >{children}</main>
            </div>

            <ToggleSideBarOpen />
        </SidebarProvider>
    )
}

export default layout