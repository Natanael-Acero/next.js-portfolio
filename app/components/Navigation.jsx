import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navigation() {
    const { theme, setTheme } = useTheme()

    const CVUrl = 'https://drive.google.com/file/d/1VuQ6dejoDyHK2krTRpoyRoDl7IxGh0YA/view?usp=share_link';

    const handleDownloadCV = () => {
        console.log("Download CV")
    }
    return (
        <nav className="px-2 sm:px-4 py-2.5 rounded ">
            <div className="container flex   items-center justify-between ">
                <Link href="/" className="flex items-center" >
                    <img src="https://ucarecdn.com/99abb6d2-48e5-46ff-93e7-5b315acd7ccb/" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-3xl">NA.</span>
                </Link>

                <div className="w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex p-4 mt-4 rounded-lg  flex-row space-x-8 mt-0 text-sm font-medium ">
                        <li>
                            <Link href="/projects" className="block py-2 pl-3 pr-4 md:bg-transparent md:p-0  text-xl  hover:text-cyan-500" aria-current="page">Projects</Link>
                        </li>
                        <li>
                            <button className=" hover:text-teal-600 block py-2 pl-3 pr-4  md:bg-transparent md:p-0  text-xl" aria-current="page" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                                {theme === 'dark' ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:text-cyan-500 w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>

                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:text-cyan-500 w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                }
                            </button>
                        </li>
                        <li>
                            <a href={CVUrl} target="_blank" className="block py-2 pl-3 pr-4  md:bg-transparent md:p-0  text-xl" aria-current="page">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:text-cyan-500 w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>

                            </a>
                        </li>
                    </ul>
                </div>
            </div >
        </nav >
    )
}