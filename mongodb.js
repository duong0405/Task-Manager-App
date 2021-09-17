// CRUD create read update delete

const mongodb = require('mongodb');
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const dbName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(dbName)

    //Insert document
    db.collection('user').insertOne({
        name: 'Kien',
        age: 28
    }, (error, result) => {
        if (error) {
            return console.log("Unable to insert user ")
        }

        console.log(result)
    })

    db.collection('user').insertMany([
        {
            name: 'Jen',
            age: 18
        },
        {
            name: 'Andrew',
            age: 30
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert docs')
        }
        console.log(result)
    })

    db.collection('tasks').insertMany([
        {
            description: 'do homework',
            completed: false
        },
        {
            description: 'clean room',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert document')
        }
        console.log(result)
    })

    // Reading document
    db.collection('user').findOne({ name: 'Phuong' }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    db.collection('user').findOne({ _id: new ObjectID('6308446d190b3af7d1fa56c1') }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    db.collection('user').find({ age: 27 }).toArray((error, users) => {
        console.log(users)
    })

    // Update document
    db.collection('user').updateOne({
        _id: new ObjectID('63083c2f100f30d1a5f9aec0')
    }, {
        $set: {
            name: 'Mike'
        }
    }).then((result) => {
        console.log(result)
    }).catch(() => {
        console.log(error)
    })

    // Delete document
    db.collection('user').deleteMany({ age: 27 }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})