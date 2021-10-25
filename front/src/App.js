import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectList from "./components/Project";
import UserList from "./components/User";
import TaskList from "./components/Task";

const usersMock = [
    {
        "id": 1,
        "username": "kpk",
        "email": "strifee322@gmail.com",
        "first_name": "",
        "last_name": "",
        "gender": "",
        "date_birth": null
    }
];

const projectsMock = [
    {
        "id": 1,
        "name": "Наилегчайший вес (Flyweight) — 53-57 кг",
        "desc": "весовая категория UFC",
        "created": "2021-09-05T12:14:29.981442Z",
        "updated": "2021-09-05T12:16:10.910777Z",
        "owner": 1
    },
    {
        "id": 2,
        "name": "Легчайший вес (Bantamweight) — 57-61 кг",
        "desc": "весовая 57-61кг UFC",
        "created": "2021-09-05T12:15:07.786348Z",
        "updated": "2021-09-05T12:16:00.445679Z",
        "owner": 1
    },
    {
        "id": 3,
        "name": "Полулёгкий вес (Featherweight) — 61-66 кг",
        "desc": "весовая 61-66 кг",
        "created": "2021-09-05T12:15:44.917395Z",
        "updated": "2021-09-05T12:15:44.917395Z",
        "owner": 1
    },
    {
        "id": 4,
        "name": "Легкий вес (Lightweight) — 66-70 кг (146-155 фунтов)",
        "desc": "весовая 57-61 кг UFC",
        "created": "2021-09-05T12:17:01.953346Z",
        "updated": "2021-09-05T12:17:01.953346Z",
        "owner": 1
    },
    {
        "id": 5,
        "name": "Полусредний вес (Welterweight) — 70-77 кг (156-170 фунтов)",
        "desc": "весовая 70-77 кг UFC",
        "created": "2021-09-05T12:17:32.515590Z",
        "updated": "2021-09-05T12:17:32.515590Z",
        "owner": 1
    },
    {
        "id": 6,
        "name": "Средний вес (Middleweight) — 77-84 кг (171-185 фунтов)",
        "desc": "весовая 77-84 кг UFC",
        "created": "2021-09-05T12:18:03.028483Z",
        "updated": "2021-09-05T12:18:03.028483Z",
        "owner": 1
    }
];

const projectTasksMock = [
{
        "id": 1,
        "title": "Дейвесон Фигередо",
        "text": "№1 UFC в наилегчайшем весе",
        "created": "2021-09-05T12:19:38.234442Z",
        "updated": "2021-09-05T12:22:31.637118Z",
        "status": true,
        "project": 1,
        "author": 1,
        "executors": [
            1
        ]
    },
    {
        "id": 2,
        "title": "Аскар Аскаров",
        "text": "боец UFC №2 наилегчайшего веса",
        "created": "2021-09-05T12:20:30.827451Z",
        "updated": "2021-09-05T12:22:38.187283Z",
        "status": false,
        "project": 1,
        "author": 1,
        "executors": [
            1
        ]
    },
    {
        "id": 3,
        "title": "Александр Пантожа",
        "text": "№3 наилегчайшего веса",
        "created": "2021-09-05T12:21:08.675150Z",
        "updated": "2021-09-05T12:22:47.291473Z",
        "status": false,
        "project": 1,
        "author": 1,
        "executors": [
            1
        ]
    },
    {
        "id": 4,
        "title": "АЛДЖЭМЕЙН СТЕРЛИНГ",
        "text": "АЛДЖЭМЕЙН СТЕРЛИНГ ЧЕМПИОН Легчайшего веса",
        "created": "2021-09-05T12:22:08.834346Z",
        "updated": "2021-09-05T12:22:08.834346Z",
        "status": true,
        "project": 2,
        "author": 1,
        "executors": [
            1
        ]
    },
    {
        "id": 5,
        "title": "Петр Ян",
        "text": "№1 легчайшего веса",
        "created": "2021-09-05T12:23:21.035571Z",
        "updated": "2021-09-05T12:23:21.035571Z",
        "status": false,
        "project": 2,
        "author": 1,
        "executors": [
            1
        ]
    },
    {
        "id": 6,
        "title": "ТиДжей Диллашоу",
        "text": "№2 ТиДжей Диллашоу",
        "created": "2021-09-05T12:23:49.668523Z",
        "updated": "2021-09-05T12:23:49.668523Z",
        "status": false,
        "project": 2,
        "author": 1,
        "executors": [
            1
        ]
    },
    {
        "id": 7,
        "title": "Александр Волкановски",
        "text": "Чемпион полулегкого веса UFC",
        "created": "2021-09-05T12:24:20.703522Z",
        "updated": "2021-09-05T12:24:20.703522Z",
        "status": false,
        "project": 3,
        "author": 1,
        "executors": [
            1
        ]
    },
    {
        "id": 8,
        "title": "Макс Холлоуэй",
        "text": "№1\tМакс Холлоуэй",
        "created": "2021-09-05T12:24:47.407820Z",
        "updated": "2021-09-05T12:24:47.407820Z",
        "status": false,
        "project": 3,
        "author": 1,
        "executors": [
            1
        ]
    },
    {
        "id": 9,
        "title": "Брайэн Ортега",
        "text": "№2\tБрайэн Ортега",
        "created": "2021-09-05T12:25:15.904407Z",
        "updated": "2021-09-05T12:25:15.904407Z",
        "status": false,
        "project": 3,
        "author": 1,
        "executors": [
            1
        ]
    },
    {
        "id": 10,
        "title": "ЧАРЛЬЗ ОЛИВЕЙРА",
        "text": "Чемпион легкого веса UFC",
        "created": "2021-09-05T12:26:02.170649Z",
        "updated": "2021-09-05T12:26:05.073704Z",
        "status": true,
        "project": 4,
        "author": 1,
        "executors": [
            1
        ]
    }
];

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
        this.setState({
            users: usersMock,
            projects: projectsMock,
            tasks: projectTasksMock
        })
    }

    render() {
     //   console.log('state', this.state);
        return (
            <div>
            <Router>
                 <Header/>
                 <ul>
                 <li>
                <Link to={"/users"}>Users</Link>
            </li>
            <li>
                <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
                <Link to={"/tasks"}>Tasks</Link>
            </li>
        </ul>
            <Route exact path="/users">
            <UserList users={this.state.users}/>
            </Route>
            <Route exact path="/projects">
            <ProjectList projects={this.state.projects}/>
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