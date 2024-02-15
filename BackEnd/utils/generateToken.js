import jwt  from "jsonwebtoken";

const generateTokenAndSetCooke = (userId,res) => {
    const  token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn: '15d'})

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000, //ms
        httpOnly: true, //prevent xss attacks cross-site scripting attackes
        sameSite: "strict",  //CSRF ATTACKS CROSS-SITE REQUEST FORGERY ATTACKS
        secure: process.env.NODE_ENV !== "development",
    });
}

export default generateTokenAndSetCooke;