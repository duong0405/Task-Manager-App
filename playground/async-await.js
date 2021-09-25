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

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('6308f2119f09b424b179284e', 2).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

// Task.findByIdAndRemove('6146e6c11bb5c3072d752a70').then(task => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then(result =>
//     console.log(result)
// ).then(e => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    return await Task.countDocuments({ completed: false })
}

deleteTaskAndCount('6146e6ab1bb5c3072d752a6e').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
