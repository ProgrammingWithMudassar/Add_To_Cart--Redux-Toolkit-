import JWT from 'jsonwebtoken';

const jsonWebToken = (user)=>{
    const secrectKey = "##1234##sndanaghaihfaharyh89werg98";

    const token = JWT.sign(
        {
            _id : user._id,
            name: user.name,
            email: user.email
        },
        secrectKey,
        { 
            expiresIn: "1h"
        }
    )

    return token;
}


export default jsonWebToken;