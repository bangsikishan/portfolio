import ProjectItem from "./ProjectItem";
import imageOne from '../assets/photo-1.jpg';
import imageTwo from '../assets/photo-2.jpg';
import imageThree from '../assets/photo-3.jpg';
import imageFour from '../assets/photo-4.jpg';

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo est cum magni. Ullam modi eligendi laboriosam cumque veniam necessitatibus blanditiis, voluptate, error ipsa praesentium voluptates fugit tempora optio, repellendus excepturi.</p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={imageOne} title='Programming' />
                <ProjectItem img={imageTwo} title='Web Development' />
                <ProjectItem img={imageThree} title='App Development' />
                <ProjectItem img={imageFour} title='Web Development' />
            </div>
        </div>
    );
}
 
export default Projects;