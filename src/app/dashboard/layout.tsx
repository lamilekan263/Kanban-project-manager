import Header from '@/components/Header'
import React from 'react'
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/App-sidebar/app-sidebar'


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar  />
            <div className='w-full'>
                <Header />
                <main className='bg-dashboard-primary h-screen' >{children}</main>
            </div>
        </SidebarProvider>
    )
}

export default layout