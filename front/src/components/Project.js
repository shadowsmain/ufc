const Project = ({project}) => {
    console.log('project:', project);
    return (
        <tr className="project-row">
            <td>
                {project.name}
            </td>

            <td>
                {project.age}
            </td>
            <td>
                {project.rating}
            </td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    console.log('projects:', projects);
    return (
        <table className={"project-list"}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Age </th>
                <th>Rating </th>
            </tr>
            </thead>
            <tbody>
            {/*{projects.map(Project)}*/}
            {projects.map((project) => <Project key={project.name} project={project}/>)}
            </tbody>
        </table>
    )
}

export default ProjectList;