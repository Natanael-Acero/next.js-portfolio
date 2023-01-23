export default function Education({ education }) {

    return (
        <section
            className="flex items-start justify-between flex-col sm:flex-row dark:text-light "
        >
            <h1 className="font-semibold">Education</h1>
            <div className="w-full pl-3">
                {
                    education.map((education) => (
                        <div className="my-16">
                            <div className="flex justify-between items-center flex-wrap">
                                <p className=" main-titles text-transparent"><strong className="font-bolder text-lg">{education.title}</strong></p>
                                <p className="text-sm dark:text-gray">
                                    {education.startDate} - {education.endDate}
                                </p>
                            </div>
                            <p className="text-sm mt-3 text-blue">{education.location}</p>
                            <ul className="mt-3">

                                <li className="dark:text-gray">{education.institution}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}