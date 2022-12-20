const  mailer= require('nodemailer')
let transport=mailer.createTransport({
    service:'gmail',
    auth:{
        username:'supjadhav07@gmail.com',
        pass:'Sup@86090'
    },
}); 
let messgageob={
    from:'supjadhav07.com',
    to:'jadhavsupriya072002@gmail.com',
    subject:'email using node js',
    text:' hello everyone'
}
transport.sendMail(messgageob,(error,info)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('email sent')
        console.log(info.response);
    }
});