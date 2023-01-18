export default function Education({ education }) {

    return (
        <section
            className="flex items-start justify-between flex-col sm:flex-row dark:text-light pl-3"
        >
            <h1 className="font-semibold">Education</h1>
            <div className="w-full">
                {
                    education.map((education) => (
                        <div className="my-16">
                            <div className="flex justify-between items-center flex-wrap">
                                <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"><strong className="font-bolder text-lg">{education.name}</strong></p>
                                <p className="text-sm dark:text-gray">
                                    {education.startDate} - {education.endDate}
                                </p>
                            </div>
                            <p className="text-sm mt-3 text-blue">{education.location}</p>
                            <ul className="mt-3">
                                {education.description.map((item) => (
                                    <li className="dark:text-gray">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}