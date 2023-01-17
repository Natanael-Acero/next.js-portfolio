import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { info } from '../data.js'

export default function Home() {
  return (
    <>
      <About name={info.name} jobDescription={info.jobDescription} about={info.about} />
      <Experience experience={info.experience} />
      <Education education={info.education} />
      <Skills skills={info.skills} />
    </>
  );
}