const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true
}).then( () => {
    console.log('ok');
}).catch( err => {
    console.log(err);
})

