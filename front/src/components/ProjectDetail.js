import React from "react";
import {useParams} from "react-router";

const ProjectDetail = ({projects}) => {
    let {id} = useParams();
    let project = projects.filter((item) => item.id === +id)[0];

   // console.log('id:', id, typeof id, typeof +id);
 //   console.log('projects:', projects);
  //  console.log('this project:', project);


    return (
     <div className={"project-detail"}>
     <h2>Project: {project.name}</h2>
     <h3>Owner: {project.owner}</h3>
     <p>Created: {project.created}</p>
     <p>Updated: {project.updated}</p>
     <h4>Desc:</h4>
     <ul>
     {project.desc}
            </ul>

     </div>
    )
}

export default ProjectDetail;