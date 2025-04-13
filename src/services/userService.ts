import userRepository from '../repositories/userRepository';
import { User } from '../entities/user';


export default {
  async getAllUsers() {
    return userRepository.findAll();
  },
  async createUser(user: User) {
    return userRepository.create(user);
  },
  
};