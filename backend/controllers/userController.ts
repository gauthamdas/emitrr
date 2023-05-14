import { Request, Response } from 'express';
import User from '../models/user';

export const createUser = async (req: Request, res: Response) => {
  const { username } = req.body;
  const user = await User.create(username);
  res.status(201).json(user);
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.getById(Number(id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const updateUserByUsername = async (req: Request, res: Response) => {
  const { username } = req.body;
  const user = await User.updateByUsername(username, 1);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.getAll();
  if (users) {
    res.json(users);
  } else {
    res.status(404).json({ message: 'Users not found' });
  };
};

export const getAllUsersRankList = async (req: Request, res: Response) => {
  const users: User[] = await User.getAllUsersRankList();
  const usersWithRank = users.map((user, index) => {return { ...user, rank: index + 1 }});
  if (users) {
    res.json(usersWithRank);
  } else {
    res.status(404).json({ message: 'Users not found' });
  }
}


