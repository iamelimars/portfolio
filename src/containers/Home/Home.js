import React, {Component} from 'react';
import Header from '../../components/Home/Header';
import About from '../../components/Home/About/About';

class Home extends Component {
    render() {
        return (
                <div>
                    <Header />
                    <About />
                </div>
        )
    }
}

export default Home