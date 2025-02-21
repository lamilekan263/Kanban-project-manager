'use client'
import { EyeOff, Home, Inbox, PlusIcon } from "lucide-react"
import { usePathname } from "next/navigation"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"

import Typography from "../Typography"
import { ToggleSidebarTheme } from "./ToggleTheme"
import Logo from "../../../public/Logo.svg"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

// Menu items.
const items = [
    {
        title: "Home",
        url: "/dashboard/home",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "/dashboard/inbox",
        icon: Inbox,
    },
]

export function AppSidebar() {
    const pathname = usePathname()

    const {
        setOpen,
        setOpenMobile,
    } = useSidebar()

    setOpenMobile(false)

    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex gap-2 p-6">
                    <Image src={Logo} alt="Logo Image of kanban" />
                    <Typography variant="xl">Kanban</Typography>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <Typography variant="body-m">ALL BOARDS (3)</Typography>
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="w-full">
                        <SidebarMenu className="ml-0">
                            {items.map((item) => {
                                const isActive = pathname === item.url
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            className={`p-5  rounded-l-none rounded-r-full ${isActive && "bg-primary text-white hover:bg-primary hover:text-white"
                                                }`}
                                        >
                                            <Link href={item.url} className="flex items-center gap-2">
                                                <item.icon />
                                                <Typography variant="s">{item.title}</Typography>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                        <Button variant="ghost" className="w-full rounded-l-none rounded-r-full mt-2">
                            <PlusIcon />
                            <Typography variant="s" className="text-primary">CREATE NEW BOARD</Typography>
                        </Button>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="mb-10">
                <ToggleSidebarTheme />
                <Button variant='ghost' onClick={() => setOpen(false)}>
                    <EyeOff />
                    <Typography variant="s">
                        Hide the Sidebar
                    </Typography>
                </Button>
            </SidebarFooter>
        </Sidebar>
    )
}
