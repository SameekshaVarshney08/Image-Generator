const mongoose =require('mongoose')
const app=require('./app.js')



const url='mongodb+srv://SAMEEKSHA:9qcRTvmp06yX1NxL@cluster0.zti6gp3.mongodb.net/testDB'


mongoose.connect(url)
.then(() => console.log('Database Connected!'));

app.listen(8000,()=> {
    console.log('----------- App Started -----------')
});