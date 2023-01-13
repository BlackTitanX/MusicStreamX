const nodemailer = require('nodemailer');


const sendEmail = (pass)=>{
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        type: 'login',
        user:'customerservicenode@mailchimp.com',
        pass: 'Node20021999*'
    }
})

let mailOptions = {
    from: 'israelperezmasle2@gmail.com',
    to:'israelperezmasle@gmail.com',
    subject: 'Test',
    text:"Thank you for joinin MusicArt"
}


    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log('something went wrong buddy' + error + pass)
        }else{
            console.log('Email Sent'+ info.response )
        }
    })
}

module.exports =  sendEmail;