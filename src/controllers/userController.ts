import { Request, Response } from 'express';
import userService from '../services/userService';

export default {
  async listUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error: any) {
      
      res.status(500).json({ error: error.message });
    }
  },
  async createUser(req: Request, res: Response){
    // console.log(req);
    
    try {
      const user = await userService.createUser(req.body);
      res.json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  
};