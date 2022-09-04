const express = require('express')
const app = express();
const {users} = require('./data');
const projectRouter = require('./routes/projects')
const { authUser, authRole, authAdmin} = require('./middleware/Auth')

app.use(express.json())
app.use(setUser)
app.use('/projects/',projectRouter);

app.get('/',(req,res)=> res.send('<h3>Home Page</h3>'))

app.get('/dashboard',authUser,(req,res)=> {
    res.send('Dashboard Page');
})

app.get('/admin',authAdmin,(req,res)=>{
    res.send('Admin Page');
})

function setUser(req,res,next)
{
    const userId = req.body.userId

    if(userId) {
        req.user = users.find(user => user.id === userId)
    }

    next();
}

app.listen(5000)
