import mongoose, { Schema } from 'mongoose';

const ContactSchema = new Schema({
  firstname: String,
  lastname: String,
  phone: String,
  JobTitle: String,
  email: String,
  message: String,
});

export default mongoose.models.Contact ||
  mongoose.model('Contact', ContactSchema);
