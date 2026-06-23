// import dbConnect from '../../lib/mongodb';
// import User from '../../lib/models/User';

// export const handler = async (req,res) => {
//    await dbConnect();
//    const {method} = req;

//    switch (method) {
//       case 'GET':
//          try {
//             const users = await User.find({})
//             res.status(200).json({success: true, data: users})
//          } catch (error) {
//             res.status(400).json({success: false})
//          }
//          break;
//       default:
//          res.status(400).json({ success: false });
//          break;
//    }
// }