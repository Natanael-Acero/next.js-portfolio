export default function Skills({ skills }) {
    console.log(skills)
    return (
        <section
            className="flex items-start justify-between flex-col sm:flex-row dark:text-light"
        >
            <h1 className="font-semibold">Skills</h1>
            <div className="w-full">

                <div className="my-16 pl-16">
                    <div className="grid grid-cols-3 gap-10">
                        {
                            skills.map((stack) => (
                                <div>
                                    {
                                        stack.map((skill) => (
                                            <ul>
                                                <li className="dark:text-gray  list-disc">{skill}</li>
                                            </ul>
                                        ))
                                    }
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>

        </section >
    )
}