"use client";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
} from "@tabler/icons-react";

import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import DarkModeToggle from "./DarkmodeToggle";

// SidebarLayout: handles only the sidebar
export function SidebarLayout() {
    const links = [
        {
            label: "Home",
            href: "/",
            icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
        },
        {
            label: "Profile",
            href: "/profile",
            icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
        },
        {
            label: "Settings",
            href: "/settings",
            icon: <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
        },
        {
            label: "Logout",
            href: "/logout",
            icon: <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
        },
    ];

    const [open, setOpen] = useState(false);

    return (
        <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10 ">
                <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {open ? <Logo /> : <LogoIcon />}
                    <div className="mt-8 flex flex-col gap-2">
                        {links.map((link, idx) => (
                            <SidebarLink key={idx} link={link} />
                        ))}


                    </div>
                </div>
                <div>
                    <DarkModeToggle />
                    <SidebarLink
                        link={{
                            label: "User Name",
                            href: "/profile",
                            icon: <p>User</p>,
                        }}
                    />
                </div>

            </SidebarBody>
        </Sidebar>
    );
}

export const Logo = () => (
    <Link

        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-medium text-black dark:text-white whitespace-pre"
        >
            Quasar
        </motion.span>
    </Link>
);

export const LogoIcon = () => (
    <Link

        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
);
