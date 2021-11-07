import {NavLink as Link} from "react-router-dom";
import React from "react";

const Project = ({project}) => {
    console.log('project:', project);
    return (
        <tr className="project-row">
            <td>

                 <Link to={`/projects/detail/${project.id}`} className="nav-link">
                        {project.name}
                </Link>
            </td>

            <td>
                {project.age}
            </td>

            <td>
                {project.rating}
            </td>

            <td>
                <Link to={`/projects/delete${project.id}`} className="nav-link">
                        delete
                </Link>
            </td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
   // console.log('projects:', projects);
    return (
        <div className="project-list">
        <table className={"project-list__table"}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Age </th>
                <th>Rating </th>
            </tr>
            </thead>
            <tbody>
            {/*{projects.map(Project)}*/}
            {projects.map((project) => <Project key={project.id} project={project}/>)}
            </tbody>
        </table>
    </div>
    )
}

export default ProjectList;