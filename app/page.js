import ScrollBar from './component/scrollbar';
import CallAction from './component/callaction';
import Link from 'next/link';
import Maps from './component/maps';
import Pricing from './component/pricing';
import Testimoni from './component/testimoni';
import FooterSitemapLinks from './component/footer';
import Navbars from './component/navbar';

export default function Home() {
    return (
        <>
            <ScrollBar />

            {/* Navbar Section */}
            <div className="flex w-full">
                <div className="py-8 px-5 lg:px-20 flex items-center justify-between h-full w-full z-50">
                    <Navbars />
                </div>
                <div className="hidden xl:block w-full">
                    <img
                        src="/bg2.png"
                        className="h-[115vh] absolute -right-10 object-fill"
                    />
                </div>
            </div>

            {/* Hero Section */}
            <section className="flex flex-col pt-10 lg:py-20 px-8 lg:px-20 h-full w-full xl:w-[70%]">
                <h1 className="text-[#4092E6] leading-[1.25em] text-4xl lg:text-5xl font-black">
                    WISATA RAFTING UNGGULAN DI KOTA BATU.
                </h1>
                <p className="pt-4 pb-8 font-semibold text-lg">
                    Banyu Rancang Rafting operator Petualangan Arung Jeram yang menyenangkan sekaligus memacu adrenalin Anda
                    di Sungai Brantas Kota Batu Jawa Timur
                </p>
                <button className="bg-white border-[#FA612F] border-4 rounded-xl text-lg text-[#FA612F] w-60 pt-2 pb-3 px-3 font-bold hover:bg-[#FA612F] hover:border-white hover:text-white">
                    Reservasi Sekarang <span className="text-2xl">🚨</span>
                </button>
            </section>

            {/* Description Section */}
            <section className="flex flex-col lg:flex-row mt-14 xl:mt-[25vh] px-5 lg:px-20">
                <img
                    src="/bg1.png"
                    className="w-full lg:w-[35%]"
                />
                <div className="ml-5 mt-5 md:mt-20 text-justify flex flex-col justify-center gap-3 font-medium pr-10">
                    <p>
                        <span className="text-[#FA612F] font-semibold">
                            Banyu Rancang Rafting (CV BUMDES BEJO TORONGREJO)
                        </span>{' '}
                        merupakan salah satu destinasi wisata minat khusus di Kota Batu Malang Jawa Timur, berdiri tahun
                        2020.
                    </p>
                    <p>
                        Dengan panjang sungai <span className="text-[#FA612F] font-semibold">9 KM</span> dan dengan durasi
                        pengarungan <span className="text-[#FA612F] font-semibold">±2 Jam</span>, Paket Rafting digemari
                        banyak tamu dikarenakan Banyu Rancang memiliki Trip Rafting dengan keindahan jeram yang luar biasa
                        dan jalur menantang yang pastinya basah seru !!!
                    </p>
                    <div className="flex mt-3 gap-2 md:gap-5 w-full">
                        <img
                            src="/photo1.jpg"
                            className="w-1/2 md:w-1/3"
                        />
                        <img
                            src="/photo3.jpg"
                            className="w-1/2 md:w-1/3"
                        />
                        <img
                            src="/photo2.jpg"
                            className="hidden md:block md:w-1/3"
                        />
                    </div>
                </div>
            </section>

            <Pricing />

            <Maps />

            <Testimoni />

            <CallAction />

            <FooterSitemapLinks />
        </>
    );
}
