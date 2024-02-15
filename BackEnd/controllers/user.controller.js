import User from "../models/user.models.js";

export const getUsersForSideBar = async (req,res) => {
    try {
        const loggedInUserId = req.user._id;

        //const allUsers =await User.find(); finde the all users with you
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.error("Error in getUsersForSideBar: ",error.message);
        res.status(500).json({error: "Internal Server error"});
    }
}