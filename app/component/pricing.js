export default function Pricing() {
    return (
        <div className="flex flex-col md:flex-row px-5 md:px-20 items-center gap-12 md:gap-7 my-32">
            <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-[#FA612F] to-[#fe8b64] bg-clip-border p-8 text-white shadow-md shadow-[#dd8568] mx-auto">
                <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                        Harga Mulai Dari
                    </p>
                    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                        200k
                        <span className="self-end text-4xl">/pax</span>
                    </h1>
                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                Konsumsi
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                Transportasi Lokal
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                Rest Area
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                Kamar Mandi
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                Dokumentasi
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                Peralatan Rafting
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="p-0 mt-12">
                    <button
                        className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-base font-bold uppercase text-[#FA612F] shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true">
                        Booking
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-center">
                    <span className="text-[#FA612F] text-4xl">Prioritas Kami</span> adalah Kenyamanan dan Keamanan Anda
                    Bersenang-senang! 😍
                </p>
                <img
                    src="/bg3.png"
                    className="w-full"
                />
            </div>
        </div>
    );
}
