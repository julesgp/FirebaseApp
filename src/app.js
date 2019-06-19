import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LogInForm from './components/logInForm';
import firebase from './firebase';

class App extends Component {
	render(){
		return (
			<LogInForm />
		)
	}

}
ReactDOM.render(<App />, document.getElementById('app'));