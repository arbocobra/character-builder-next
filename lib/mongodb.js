// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//    throw new Error('no env')
// }

// let cached = global.mongoose;

// if (!cached) {
//    cached = global.mongoose = { conn: null, promise: null };
// }

// const dbConnect = async () => {
//    if (cached.conn) { return cached.conn }
//    if (!cached.conn) {
//       cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => { return mongoose })
//    }
//    cached.conn = await cached.promise;
//    console.log('connected - ncr')
//    return cached.conn;
// }

// export default dbConnect;