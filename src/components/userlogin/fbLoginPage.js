import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

class FBloginForm extends Component {
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
		const fbButtonStyle = {
			backgroundColor: '#3b5998'
		}
		const fbErrorMessageStyle = {
		      color: 'red',
		      paddingTop: '6px'
		    };
		return (
			<div>				
				<button tabindex={0} className="btn btn-primary" style={fbButtonStyle} >
					<img id="fbLoginIcon" src="LG/img/facebo.png" alt="Facebook Login" />
				</button>
				<div id="facebookSignUpErrorMessage" style={fbErrorMessageStyle}></div>
				<p>
					<br /> <b className="para" >OR</b> <br/>
				</p>
				<h5>
					<b className="para">Login with your site account : </b>
				</h5>
				<br/> 
			</div>
		);
	}
}
// FBloginForm.propTypes = {
// 	userSignupRequest: PropTypes.func.isRequired
// };
// FBloginForm.contextTypes = {
// 	router: PropTypes.object
// };
export default FBloginForm;