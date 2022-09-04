// Authenticating the user 
function authUser(req,res,next){
    if(req.user == null)
    {
        res.status(403);
        return res.send('You need to sign in')
    }

    next();
}

// Verifying User's Role
function authRole(role){
    return (req,res,next) =>
    {
        if(req.user.role !== role)
        {
            return res.status(401).send('Not allowed')
        }

        next()
    }
}

// Authenticating Admin User

function authAdmin(req,res,next)
{
    // first check if the user is logged in 
    if(req.user == null )
    {
        return res.status(401).send('You are not signed in');
    }

    if(req.user.role !=='admin')
    {
        return res.status(401).send('You are not allowed here');
    }

    next();
    
}




module.exports = {
    authUser,
    authRole,
    authAdmin
}