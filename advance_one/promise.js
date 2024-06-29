const promiseOne = new Promise((resolve, rej) => {
    setTimeout(() => {
        resolve()
    }, 1000)
})
promiseOne.then(() => {
    console.log('promise1 consumed')
})

const promiseTwo = new Promise((resolve, rej) => {
    setTimeout(() => {
        console.log('Async Task 2 Completed')
        resolve()
    }, 2000)
}).then(() => {
    console.log('promise2 consumed')
})

const promise3 = new Promise((resolve, rej) => {
    setTimeout(() => {
        resolve({ username: 'Yahya Bhabay', Email: 'yahyabhabay07@gmail.com' })
    }, 3000)
}).then((data) => {
    console.log(data)
})

const promise4 = new Promise((resolve, reject) => {
    let error = false
    setTimeout(() => {

        if (!error) {
            resolve({ username: 'Yahya', Email: 'yahyabhabay07@gmail.com', InstaId: 'Yahyaaaaa.21' })
        }
        else {
            reject('Error: something went wrong')
        }
    }, 4000)
}).then((userdata) => {
    console.log(userdata)
    return userdata.InstaId
}).then((username) => console.log(username))
    .catch((error) => console.log(error))
    .finally(() => console.log('Promise is Either resolved or rejected'))


const promiseFive = new Promise((resolve, reject) => {
    let error = true
    setTimeout(() => {

        if (!error) {
            resolve({ username: 'Araf', Password: '123456' })
        }
        else {
            reject('Error: server not working')
        }
    }, 5000)
})

consumePromiseFive = async () => {
    try {
        const response = await promiseFive
        console.log(response.username)
    } catch (error) {
        console.log(error)
    }

}

consumePromiseFive()

// getAllUsers = async () => {
//     try {
//         const userData = fetch('https://jsonplaceholder.typicode.com/users')
//         const response = await userData
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
   
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log('Unable to fetch data')
})