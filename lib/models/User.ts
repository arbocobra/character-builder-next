// import mongoose from 'mongoose';

// const { Schema } = mongoose;

// const UserSchema = new Schema({
//    name: {
//       type: String,
//       required: true,
//    },
//    email: {
//       type: String,
//       required: [true, 'Email is required'],
//       lowercase: true,
//       trim: true,
//       unique: true,
//       match: [/.+\@.+\..+/, 'Please enter valid email address'],
//    },
//    password: {
//       type: String,
//       required: true,
//    },
//    dateCreated: {
//       type: Date,
//       default: Date.now
//    }
// });

// export default mongoose.models.User || mongoose.model('User', UserSchema)
