import userRepository from '../repositories/userRepository';

export default {
  async getAllUsers() {
    return userRepository.findAll();
  },
  
  // 其他服务方法...
};