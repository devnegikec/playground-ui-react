import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupFrom from './SignupFormPage';
import FBloginForm from './fbLoginPage';
import { userSignupRequest } from '../../actions/signupActions';

class SignupPage extends Component {
	render() {
		const { userSignupRequest } = this.props;
		return (
			<div>
				<FBloginForm />
				<SignupFrom userSignupRequest={userSignupRequest} />
			</div>
		);
	}
}

SignupPage.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
};

export default connect(
	null,
	{ userSignupRequest }
)(SignupPage);