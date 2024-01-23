import { Head } from "@inertiajs/react";

export default function ComingSoon(props) {
    return (
        <div>
            <Head title={props.title} />
            <div className="bg-photos bg-cover bg-center">
                <div className="backdrop-blur-sm">
                    <div className="container flex flex-col h-screen w-screen selection:bg-red-300 selection:text-red-900">
                        <div className="flex flex-col justify-center items-center h-full">
                            <div className="w-32 mb-3">
                                <img
                                    src="/logo.png"
                                    width={500}
                                    height={500}
                                    alt="AKAI Logo"
                                />
                            </div>
                            <div className="text-3xl md:text-4xl lg:text-6xl text-center text-white font-black py-5 uppercase drop-shadow-md">
                                {`We're Launching Soon`}
                            </div>
                            <p className="text-sm lg:text-base text-center text-white/75">
                                {`We're creating something exciting and about
                        to launch soon.`}
                            </p>
                            <p className="text-sm lg:text-base text-center text-white/70">
                                Thank you so much for your interest.
                            </p>
                            <div className="mt-5 text-white/75 flex justify-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <a
                                        href="mailto:marketing@akaicaraudio.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center py-2 px-4 rounded-md bg-black/25 hover:bg-black/80"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-mail"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                            <path d="M3 7l9 6l9 -6" />
                                        </svg>
                                        <div className="text-sm ml-1">
                                            Email Us
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/akai.caraudio/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center py-2 px-4 rounded-md bg-black/25 hover:bg-black/80"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-instagram"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M16.5 7.5l0 .01" />
                                        </svg>
                                        <div className="text-sm ml-1">
                                            Instagram
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-white text-center items-center justify-center pb-5 drop-shadow">
                            © 2024 AKAI Car Audio. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
