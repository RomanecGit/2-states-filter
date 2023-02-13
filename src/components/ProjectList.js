function ProjectList({projects}) {
    return (
        <div className="projectList">
            {
                projects.map((project, i) =>
                <img src={project.img} key={i}/>
            )}
        </div>
    )
}

export default ProjectList