import mongoose, { Schema } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    color: { type: String, required: true },
  },
  { timestamps: true },
);

export const Team = mongoose.model('Team', teamSchema);