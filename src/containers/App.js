import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/searchbox";
import Scroll from "../components/Scroll";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => {this.setState({robots:users})});
    }

    onSearch = (event) => {
        this.setState({searchfield : event.target.value})
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredrobot = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if (!robots.length) {
            return <h1>Loading</h1>
        }

        else {
            return (
                <div className="tc">
                    <h1>Robofriends</h1>
                    <SearchBox searchchange = {this.onSearch}/>
                    <Scroll>
                    <CardList robots={filteredrobot} />
                    </Scroll>
                </div>
            );
        }  
    }
}

export default App;