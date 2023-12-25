const jwt = require('jsonwebtoken');
require('dotenv').config();

const Authentication = (req,res,next)=>{
    // console.log(req.headers.authorization)
    if(req.headers['x-access-token']){
        const token = req.headers['x-access-token'];
        if(token){
            jwt.verify(token,process.env.SECRET,function(err,decoded){
                if(err){
                    return res.status(400).json({ message: 'token not valid' });
                }
                req.user = decoded.id;
                next();
            })
        }else{
            return res.status(401).json({ message: 'token missing' });
            // return res.status(401).json({ message: 'Unauthorized' });
        }
    }else{
        return res.status(403).json({ message: 'user not authonticated' });
        // return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = Authentication;
