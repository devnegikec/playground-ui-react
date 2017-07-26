import _ from 'lodash';
const delay = 10;

const users = [
  {
    id: "18372290",
    username: "user",
    password: "user",
    role: "user"
  },
  {
    id: "72971273",
    username: "manager",
    password: "manager",
    role: "manager"
  },
  {
    id: "98009373",
    username: "admin",
    password: "admin",
    role: "admin"
  }
];


class UserApi {
  static getAllUsers(userData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let user = _.find(users, function(o) {
                        return o.username === userData.username && o.password === userData.password;
                    });
        if(_.isEmpty(user)){
          user = {error: 'user not found'};
        }
        resolve(Object.assign({}, user));
      }, delay);
    });
  }

}

export default UserApi;