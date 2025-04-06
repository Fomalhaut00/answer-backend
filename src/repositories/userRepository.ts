import { User } from '../entities/user';

export default {
  async findAll() {
    return User.findAll();
  },
  
  // 其他数据访问方法...
};