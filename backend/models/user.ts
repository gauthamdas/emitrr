import redisClient from '../config/redis';

interface User {
  id: number;
  username: string;
  points: number;
}

const User = {
  async getAll(): Promise<User[]> {
    const users = await redisClient.get('users');
    if (users) {
      return JSON.parse(users);
    } else {
      const newUsers: User[] = [
        { id: 1, username: 'mortal', points: 0 },
        { id: 2, username: 'deathnib', points: 0 },
        { id: 3, username: 'scout', points: 0 },
      ];
      await redisClient.set('users', JSON.stringify(newUsers));
      return newUsers;
    }
  },

  async create(username: string): Promise<User> {
    const users = await User.getAll();
    const lastUser = users[users.length - 1];
    const newUser = {
      id: lastUser.id + 1,
      username: username,
      points: 0,
    };
    users.push(newUser);
    await redisClient.set('users', JSON.stringify(users));
    return newUser;
  },

  async getById(id: number): Promise<User | null> {
    const users = await User.getAll();
    const user = users.find((u) => u.id === id);
    return user ?? null;
  },

  async updateByUsername(username: string, points: number): Promise<User | null> {
    const users = await User.getAll();
    const index = users.findIndex((u) => u.username === username);
    if (index === -1) {
      return null;
    }
    users[index].points += points;
    await redisClient.set('users', JSON.stringify(users));
    return users[index];
  },

  async getAllUsersRankList(): Promise<User[]> {
    const users = await User.getAll();
    return users.sort((a, b) => b.points - a.points);
  }
};

export default User;