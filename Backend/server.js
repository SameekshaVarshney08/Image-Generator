const mongoose =require('mongoose')
const app=require('./app.js')



const url='mongodb+srv://SAMEEKSHA:9qcRTvmp06yX1NxL@cluster0.zti6gp3.mongodb.net/testDB'

let dbLink=url.replace("$_USERNAME_$",databaseUser);
dbLink=dbLink.replace("$_PASSWORD_$",databasePassword);
dbLink=dbLink.replace("$_DB_NAME_$",databaseName);

mongoose.connect(dbLink)
.then(() => console.log('Database Connected!'));

app.listen(8000,()=> {
    console.log('----------- App Started -----------')
});