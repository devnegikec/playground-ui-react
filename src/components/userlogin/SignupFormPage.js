import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.goToDashBoard = this.goToDashBoard.bind(this);
	}
	goToDashBoard(role) {
		this.context.router.push('/');
	}
	onChange(event) {		 
		this.setState({[event.target.name]: event.target.value});
	}
	onSubmit(event) {
		event.preventDefault();
		this.props.userSignupRequest(this.state).then( (userInfo) => {
					if(!userInfo.error){
						this.goToDashBoard(userInfo.role);
					}					
				});
	}
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<h1> Welcome </h1>
				<div className="form-group">
					<label className="">Username</label>
					<input 
						value={this.state.username}
						onChange={this.onChange}
						type="text" 
						name="username" 
						className="form-control" />
				</div>				
				<div className="form-group">
					<label className="">Password</label>
					<input 
						value={this.state.password}
						onChange={this.onChange}
						type="password" 
						name="password" 
						className="form-control" />
				</div>			
				<div className="form-group">
					<button className="btn btn-primary btn-lg">
					Sign Up
					</button>
				</div>
			</form>
		);
	}
}
SignupForm.propTypes = {
	userSignupRequest: PropTypes.func.isRequired
};
SignupForm.contextTypes = {
	router: PropTypes.object
};
export default SignupForm;
