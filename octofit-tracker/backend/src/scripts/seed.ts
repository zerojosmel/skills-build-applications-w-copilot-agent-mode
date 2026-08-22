import mongoose from 'mongoose';
import { Activity } from '../models/activity.js';
import { Leaderboard } from '../models/leaderboard.js';
import { Team } from '../models/team.js';
import { User } from '../models/user.js';
import { Workout } from '../models/workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      Workout.deleteMany({}),
      User.deleteMany({}),
    ]);

    const users = await User.create([
      { name: 'Maya Chen', email: 'maya.chen@example.com', passwordHash: 'demo-hash-maya', avatarUrl: '/avatars/maya.png' },
      { name: 'Jordan Ellis', email: 'jordan.ellis@example.com', passwordHash: 'demo-hash-jordan', avatarUrl: '/avatars/jordan.png' },
      { name: 'Riley Morgan', email: 'riley.morgan@example.com', passwordHash: 'demo-hash-riley', avatarUrl: '/avatars/riley.png' },
    ]);

    const teams = await Team.create([
      { name: 'Dawn Patrol', description: 'Early risers building consistent habits.', members: [users[0]._id, users[1]._id], color: '#f59e0b' },
      { name: 'Peak Performers', description: 'Strength and endurance with a friendly edge.', members: [users[2]._id], color: '#0ea5e9' },
    ]);

    await Activity.create([
      { user: users[0]._id, team: teams[0]._id, type: 'running', durationMinutes: 35, calories: 310, completedAt: new Date('2026-08-20T06:30:00Z') },
      { user: users[1]._id, team: teams[0]._id, type: 'cycling', durationMinutes: 50, calories: 460, completedAt: new Date('2026-08-21T07:00:00Z') },
      { user: users[2]._id, team: teams[1]._id, type: 'strength', durationMinutes: 45, calories: 280, completedAt: new Date('2026-08-21T18:00:00Z') },
    ]);

    await Leaderboard.create([
      { user: users[0]._id, team: teams[0]._id, points: 860, rank: 1, week: '2026-W34' },
      { user: users[1]._id, team: teams[0]._id, points: 720, rank: 2, week: '2026-W34' },
      { user: users[2]._id, team: teams[1]._id, points: 640, rank: 3, week: '2026-W34' },
    ]);

    await Workout.create([
      { user: users[0]._id, title: 'Full-body foundation', focus: 'Strength', difficulty: 'beginner', durationMinutes: 30, exercises: [{ name: 'Bodyweight squat', sets: 3 }, { name: 'Push-up', sets: 3 }], scheduledFor: new Date('2026-08-22T08:00:00Z') },
      { user: users[1]._id, title: 'Tempo ride prep', focus: 'Endurance', difficulty: 'intermediate', durationMinutes: 40, exercises: [{ name: 'Bike intervals', sets: 5 }, { name: 'Core plank', sets: 3 }], scheduledFor: new Date('2026-08-23T07:00:00Z') },
      { user: users[2]._id, title: 'Mobility reset', focus: 'Mobility', difficulty: 'beginner', durationMinutes: 20, exercises: [{ name: 'World greatest stretch', sets: 2 }, { name: 'Cat-cow', sets: 2 }], scheduledFor: new Date('2026-08-22T18:00:00Z') },
    ]);

    console.log('Seeded users, teams, activities, leaderboard, and workouts');
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
