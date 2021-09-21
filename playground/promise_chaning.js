require('../src/db/mongoose')

const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('6308f2119f09b424b179284e', { age: 1 }).then(user => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then(result => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

Task.findByIdAndRemove('6146e6c11bb5c3072d752a70').then(task => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then(result =>
    console.log(result)
).then(e => {
    console.log(e)
})
