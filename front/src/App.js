import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectList from "./components/Project";


const projectsMock = [
    {'name': "Израэль Адесанья", 'age': "26", 'rating': "Champion"},
    {'name': "Нейт Диаз", 'age': "30", 'rating': "10"},
    {'name': "Ник Диаз", 'age': "35", 'rating': "12",}
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
            projects: projectsMock
        })
    }

    render() {
        console.log('state', this.state);
        return (
            <div>
                <Header/>
                Dashboard
                <ProjectList projects={this.state.projects}/>
                <Footer/>
            </div>
        )
    }
}

export default App;