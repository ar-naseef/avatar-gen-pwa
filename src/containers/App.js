import  React  from "react";
import { connect } from "react-redux";
import 'tachyons'
import './App.css'
import { ErrorBoundry } from "../components/errorboundry"; 
import { SearchBar } from "../components/searchbar";
import { Scroll } from "../components/scroll";
import { Header } from "../components/header";
import AvatarCreator from "../components/avatar-creator";
import { setSearchField } from "../actions";


const mapStateToProps = state => {
    return {
        searchField : state.searchRobots.searchField
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
    }
}

class App extends React.Component {

    render () {
        const {onSearchChange } = this.props; 

        return (
            <div className='tc'>
                <Header />
                <SearchBar 
                    searchChange = {onSearchChange}
                />
                <Scroll>
                    <ErrorBoundry>
                        <AvatarCreator />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
} 

export default connect(mapStateToProps , mapDispatchToProps)(App); 