import mongoose, { Schema } from 'mongoose';

const workoutSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    focus: { type: String, required: true },
    difficulty: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
    durationMinutes: { type: Number, required: true, min: 1 },
    exercises: [{ name: { type: String, required: true }, sets: { type: Number, required: true, min: 1 } }],
    scheduledFor: { type: Date, required: true },
  },
  { timestamps: true },
);

export const Workout = mongoose.model('Workout', workoutSchema);