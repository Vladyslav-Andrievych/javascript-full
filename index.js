/*
eslint-disable max-classes-per-file
 */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(arrOfUsers) {
    this._users = arrOfUsers;
    this._users = Object.freeze(this._users); // без этой строки
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(({ _name }) => _name);
  }

  getUserIds() {
    return this._users.map(({ _id }) => _id);
  }

  getUserNameById(id) {
    return this._users.find(({ _id }) => _id === id)._name;
  }
}

const user1 = new User('1', 'Vlad', 'asdf1');
const user2 = new User('2', 'Vasya', 'asdf2');
const user3 = new User('3', 'Petya', 'asdf3');
const user4 = new User('4', 'Nina', 'asdf4');

const userRepository1 = new UserRepository([user1, user2, user3, user4]);
userRepository1.users = 'str'; // эта строка всё равно не поменяла бы значение свойства .users, так как нету setter
console.log(userRepository1);
