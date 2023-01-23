export default function Footer({ socialMedia }) {
    return (
        <footer
            className="container flex sm:flex-row flex-col justify-between items-center mb-8 sm:mb-4"
        >
            <p className="dark:text-light text-right my-8 text-lg">
                Developed by <strong>Natanael Acero</strong>.
            </p>
            <div className="grid grid-cols-3 gap-10">
                <a
                    aria-label="Social Media"
                    href={socialMedia.github}
                    target="_blank"
                    className="footer-icons"
                >
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ><path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    ></path>
                    </svg>
                </a>
                <a
                    aria-label="Social Media"
                    href={socialMedia.linkedin}
                    target="_blank"
                    className="footer-icons"
                >
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ><path
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    ></path><rect x="2" y="9" width="4" height="12"></rect><circle
                        cx="4"
                        cy="4"
                        r="2"></circle>
                    </svg>
                </a>
                <a
                    aria-label="Social Media"
                    href={socialMedia.email}
                    target="_blank"
                    className="footer-icons"
                >
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ><path
                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path><polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </a>
            </div>
        </footer>
    )
}