import mongoose, { Schema } from 'mongoose';

const SubscribeSchema = new Schema({
  firstname: String,
  email: String,
});

export default mongoose.models.Subscribe ||
  mongoose.model('Subscribe', SubscribeSchema);
