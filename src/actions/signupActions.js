import axios from 'axios';
import * as types from './actionTypes';
import UserApi from '../api/userApi';


export function userSignupRequest(userData) {
	return function(dispatch) {
		return UserApi.getAllUsers(userData);
	};
}
