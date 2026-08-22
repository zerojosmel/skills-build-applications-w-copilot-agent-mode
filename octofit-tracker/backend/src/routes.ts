import { Router } from 'express';
import type { Model } from 'mongoose';
import { Activity } from './models/activity.js';
import { Leaderboard } from './models/leaderboard.js';
import { Team } from './models/team.js';
import { User } from './models/user.js';
import { Workout } from './models/workout.js';

const createCollectionRouter = (model: Model<any>, collectionName: string) => {
  const router = Router();

  router.get('/', async (_request, response, next) => {
    try {
      const data = await model.find().lean();
      response.json({ collection: collectionName, data });
    } catch (error) {
      next(error);
    }
  });

  return router;
};

export const usersRouter = createCollectionRouter(User, 'users');
export const teamsRouter = createCollectionRouter(Team, 'teams');
export const activitiesRouter = createCollectionRouter(Activity, 'activities');
export const leaderboardRouter = createCollectionRouter(Leaderboard, 'leaderboard');
export const workoutsRouter = createCollectionRouter(Workout, 'workouts');