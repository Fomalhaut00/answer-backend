import { Request, Response } from 'express';
import userService from '../services/userService';

export default {
  async listUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  // 其他控制器方法...
  createUser(){

  }
  
};