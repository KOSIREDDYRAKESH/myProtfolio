import React from 'react'
import ProjectSkills from "../Projects/ProjectSkills";
import ProjectImageCurosel from './ProjectImageCurosel';

const ReduxProject = ({ project }) => {
    if (!project)
        return null;
    const { name, url, description, toolDescription, skillsUsed, projectLink } = project;
    return (
        <>
            <div className='bg-slate-100 w-screen pb-10'>
                <div className='lg:flex'>
                    <div className='m-14 mb-0 lg:w-6/12 lg:order-2 '>
                        <h1 className='text-xl text-red-600 font-extralight my-3 lg:text-4xl lg:hidden'>{name}</h1>
                        <ProjectImageCurosel projectUrl={url} />
                    </div>
                    <div className='m-10 p-7 lg:m-10  lg:w-6/12 lg:order-1 shadow-xl lg:p-10 rounded-3xl'>
                        <h1 className='text-xl hidden my-4 lg:block text-red-600 font-extralight lg:text-4xl '>{name}<hr></hr></h1>

                        <p className='pb-3 text- font-normal'>{description}</p>
                        <p className='text-xs lg:text-sm text-slate-700'>
                            "{toolDescription}"
                        </p>
                        <div className='-mx-10 lg:flex lg:justify-center'>
                            <ProjectSkills tools={skillsUsed} projectLink={projectLink} />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReduxProject