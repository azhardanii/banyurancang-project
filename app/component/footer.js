'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp } from 'react-icons/bs';

export default function FooterSitemapLinks() {
    return (
        <Footer className="mt-10">
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 py-8 md:grid-cols-4 px-5 md:px-20 mb-10">
                    <div>
                        <Footer.Title
                            className="text-black font-bold text-left md:text-center"
                            title="Halaman"
                        />
                        <Footer.LinkGroup
                            col
                            className="text-left md:text-center">
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Beranda
                            </Footer.Link>
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Profil
                            </Footer.Link>
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Galeri
                            </Footer.Link>
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Paket Rafting
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title
                            title="Pusat Bantuan"
                            className="text-black font-bold text-right md:text-center"
                        />
                        <Footer.LinkGroup
                            col
                            className="text-right md:text-center">
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                E-mail
                            </Footer.Link>
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                WhatsApp
                            </Footer.Link>
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Instagram
                            </Footer.Link>
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Alamat Kantor
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title
                            title="legal"
                            className="text-black font-bold text-left md:text-center"
                        />
                        <Footer.LinkGroup
                            col
                            className="text-left md:text-center">
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Licensing
                            </Footer.Link>
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Incorporated Docs
                            </Footer.Link>
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Terms & Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title
                            title="download"
                            className="text-black font-bold text-right md:text-center"
                        />
                        <Footer.LinkGroup
                            col
                            className="text-right md:text-center">
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Flyer
                            </Footer.Link>
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Pricelist
                            </Footer.Link>
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Documentation
                            </Footer.Link>
                            <Footer.Link
                                href="#"
                                className="text-black font-medium md:mr-0">
                                Company Profile
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-200 px-5 md:px-20 pt-6 pb-8 flex items-center gap-3 flex-col-reverse md:flex-row md:items-center md:justify-between">
                    <Footer.Copyright
                        by="CV BUMDES BEJO TORONGREJO"
                        href="#"
                        year={2023}
                        className="text-black font-medium"
                    />
                    <div className="mt-4 flex space-x-6 md:mt-0 md:justify-center">
                        <BsWhatsapp className="cursor-pointer" />
                        <BsFacebook className="cursor-pointer" />
                        <BsInstagram className="cursor-pointer" />
                        <BsTwitter className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
