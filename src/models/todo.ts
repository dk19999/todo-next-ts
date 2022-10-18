import mongoose, {  Document, Schema } from 'mongoose';

export interface ITodo extends Document {
  name: string;
  completed:boolean;
}

const TodoSchema:Schema = new Schema<ITodo>(
  {
 
    name: {
      type: String,
      required: true,
    },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Todos || mongoose.model('Todos', TodoSchema);
