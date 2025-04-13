import { User } from '../entities/user';
import prisma from '../../src/prismaClient'
import { log } from 'console';

export default {
  async findAll() {
    const users = await prisma.user.findMany()
    return users
    
  },
  async create(user: User){
    
    const newUser = await prisma.user.create({
      data: user
    })    
     return newUser

  }
};