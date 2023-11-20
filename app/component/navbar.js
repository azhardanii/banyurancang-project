'use client';

import { Navbar } from 'flowbite-react';
import Link from 'next/link';

export default function Navbars() {
    return (
        <Navbar>
            <div className="md:flex w-screen md:w-[40rem]">
                <img
                    src="/logo-banyurancang.png"
                    className="hidden md:block w-auto h-12 bg-slate-700 rounded-xl"
                    alt="Banyu Rancang Logo"
                />

                <div className="flex flex-row-reverse w-full justify-between pr-14">
                    <Navbar.Toggle />
                    <img
                        src="/logo-banyurancang.png"
                        className="md:hidden w-auto h-12 bg-slate-700 rounded-xl"
                        alt="Banyu Rancang Logo"
                    />
                </div>
                <Navbar.Collapse className="md:ml-1 md:flex md:justify-between md:w-full md:items-center">
                    <Navbar.Link
                        href="#"
                        className="text-lg font-bold md:hover:text-[#4092E6] md:ml-5">
                        Home
                    </Navbar.Link>
                    <Navbar.Link
                        as={Link}
                        href="#"
                        className="text-lg font-bold md:hover:text-[#4092E6] md:ml-5">
                        About
                    </Navbar.Link>
                    <Navbar.Link
                        href="#"
                        className="text-lg font-bold md:hover:text-[#4092E6] md:ml-5">
                        Services
                    </Navbar.Link>
                    <Navbar.Link
                        href="#"
                        className="text-lg font-bold md:hover:text-[#4092E6] md:ml-5">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link
                        href="#"
                        className="text-lg font-bold md:hover:text-[#4092E6] md:ml-5">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
