export default function Experience({ experience }) {

    return (
        <section
            className="flex items-start justify-between flex-col sm:flex-row dark:text-light"
        >
            <h1 className="font-semibold">Experience</h1>
            <div className="w-full">
                {
                    experience.map((experience) => (
                        <div className="my-16">
                            <div className="flex justify-between items-center flex-wrap">
                                <p className="text-transparent main-titles"><strong className="font-bolder text-lg">{experience.position}</strong> at {experience.company}</p>
                                <p className="text-sm dark:text-gray">
                                    {experience.startDate} - {experience.endDate}
                                </p>
                            </div>
                            <p className="text-sm mt-3 text-blue">{experience.location}</p>
                            <ul className="mt-3 pl-7">
                                {experience.description.map((item) => (
                                    <li className="dark:text-gray list-disc">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}