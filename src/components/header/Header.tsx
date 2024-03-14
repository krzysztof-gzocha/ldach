'use client'
import { PAGE_LINK } from "@/enums/page-link.enum";
import Image from 'next/image';
import {MenuMobile} from "@/components/header/components";
import {useState} from "react";

const navLinks = [{
    path: PAGE_LINK.OUR_COMPANY,
    label: 'O NAS'
}, {
    path: PAGE_LINK.SERVICES,
    label: 'NASZE USŁUGI'
}, {
    path: PAGE_LINK.GALLERY,
    label: 'GALERIA'
}, {
    path: PAGE_LINK.SERVICES,
    label: 'KONTAKT'
}]

const Header = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const handleMobileMenuState = (state: boolean) => {
        setIsMobileOpen(state)
    }

    return (
        <div className="sticky top-0 z-40 bg-white">
            <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-10">
                <div className="flex-shrink-0">
                    <Image src="/logo.svg" alt='L-dach logo' width={200} height={150} className="w-20 lg:w-auto" />
                </div>
                <div className="flex h-full xl:hidden ">
                    <MenuMobile
                        options={navLinks}
                        isActive={isMobileOpen}
                        handleMenuState={handleMobileMenuState}
                    />
                </div>
                <nav className="hidden lg:flex gap-6 font-extrabold text-xl">
                    <a href={PAGE_LINK.OUR_COMPANY} className="hover:underline ">O NAS</a>
                    <a href={PAGE_LINK.SERVICES} className="hover:underline">NASZE USŁUGI</a>
                    <a href={PAGE_LINK.GALLERY} className="hover:underline">GALERIA</a>
                    <a href={PAGE_LINK.CONTACT} className="hover:underline">KONTAKT</a>
                </nav>
            </div>
        </div>
    );
}

export default Header;
