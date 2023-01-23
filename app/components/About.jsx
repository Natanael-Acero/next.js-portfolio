export default function About({ name, jobDescription, about }) {

    return (
        <>
            <h1 className="main-heading font-semibold text-6xl">{name}</h1>
            <h2 className="font-semibold text-4xl py-3">{jobDescription}</h2>
            <p className="text-lg font-medium text-justify py-7">{about}</p>
        </>
    )
}