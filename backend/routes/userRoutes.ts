import express from 'express';
import {
  createUser,
  getAllUsers,
  getAllUsersRankList,
  getUserById,
  updateUserByUsername,
} from '../controllers/userController';

const router = express.Router();

router.get('/users/all', getAllUsers);
router.post('/users/new', createUser);
router.post('/users/pointsUpdate', updateUserByUsername);
router.get('/leaderboard', getAllUsersRankList)
router.get('/users/:id', getUserById);

export default router;