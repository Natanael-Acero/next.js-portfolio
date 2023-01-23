import { info } from '../../data.js'
import ProjectCard from './ProjectCard'

export default function Projects() {
    return (
        <>
            <h1 className="font-semibold">Projects</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-16">
                {info.projects.map((project) => <ProjectCard projectDetail={project} />)}
            </div>
        </>


    )
}
