import User from "../model/User";

const getAllUser = async (req, res, next) => {
    var users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({
            message: "No Users Found"
        });
    }
}