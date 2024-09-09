import mongoose from "mongoose";

// 몽고디비 콜렉션 tasks의 구조
const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 30,
      validate: {
        validator: function(title) {
          return title.split(' ').length > 1;
        },
        message: "Must contain at least 2 words.",
      }
    },
    description: {
      type: String,
    },
    isComplete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt 자동으로 생긴다
  }
);

const Task = mongoose.model('Task', TaskSchema); // Task -> tasks 몽고 콜렉션 대응

export default Task;