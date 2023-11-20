import { BsWhatsapp } from 'react-icons/bs';

export default function CallAction() {
    return (
        <div className="relative flex items-center justify-center h-[35rem] z-10 bg-fixed bg-center bg-cover bg-[url('/photo4.jpg')] bg-gray-900/30">
            <div className="absolute top-0 left-0 w-full h-full bg-[#154a9a70]"></div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center gap-3 text-center text-white p-4 md:p-8">
                <p className="text-[2rem] -mt-2 md:mt-0 md:text-3xl font-bold">
                    Yukk Mulai Petualanganmu Bareng Banyu Rancang 🥰
                </p>
                <p className="text-[2.4rem] md:text-5xl tracking-[0.5rem] font-bold">HUBUNGI SEKARANG!!</p>
                <a
                    href="https://wa.me/6281335672442"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center mt-2 cursor-pointer">
                    <div className="bg-white py-4 px-5 flex gap-3 items-center">
                        <BsWhatsapp className="text-[#25D366] text-5xl md:text-6xl" />
                        <div className="flex flex-col items-start">
                            <b className="text-lg md:text-xl text-black">Admin Responsif:</b>
                            <p className="text-[#0f75bc] text-2xl md:text-4xl font-bold">+62 8133 567 2442</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
