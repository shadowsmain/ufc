import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import {Navbar, Container, Nav } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";
import UserList from "./components/UserList";
import TaskList from "./components/TaskList";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000"
const getURL = (suffix) => `${API_URL}/api/${suffix}/`;

class App extends React.Component {
    constructor(props) {
        super(props);  // parent constructor
        this.state = {
            users: [],
            projects: [],
            tasks: [],
            age: [],
            rating: []

        };
    }

    componentDidMount() {
        // call API
        axios
        .get(getURL("users"))
        .then((result) => {
          console.log('users result:', result)
          this.setState({
              users: result.data
              })
          })
            .catch((error) => console.log(error));

            axios
        .get(getURL("projects"))
        .then((result) => {
          this.setState({
              projects: result.data
              })
          })
            .catch((error) => console.log(error));

            axios
        .get(getURL("project-tasks"))
        .then((result) => {

          this.setState({
              tasks: result.data
              })
          })
            .catch((error) => console.log(error));

        this.setState({
     //       users: usersMock,
           // projects: projectsMock,
          //  tasks: projectTasksMock
        })
    }

    render() {
     //   console.log('state', this.state);
        return (
            <div>
            <Router>
                 <Header/>
            <Route exact path="/users">
            <UserList users={this.state.users}/>
            </Route>
            <Route exact path="/projects">
            <ProjectList projects={this.state.projects}/>
            </Route>
            <Route exact path="/projects/detail/:id">
            <ProjectDetail projects={this.state.projects}/>

            </Route>
            <Route exact path="/tasks">
            <TaskList tasks={this.state.tasks}/>
            </Route>

            </Router>

        <Footer/>
         </div>
        )
    }
}

export default App;