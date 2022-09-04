const ROLE = {
    ADMIN:'admin',
    BASIC:'basic'
}

module.exports = {
    ROLE: ROLE,
    
    users: [
        {id:1, name:'Admin',role: ROLE.ADMIN},
        {id:2, name:'John',role: ROLE.BASIC},
        {id:3, name:'Doe',role: ROLE.BASIC},
    ],

    projects:[
        {id:1, name:"Admin's Project", userId:1},
        {id:2, name:"John's Project", userId:2},
        {id:3, name:"Doe's Project", userId:3},
    ]
}   