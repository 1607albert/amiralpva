const express = require('express');
const app = express()
const { mail, passmail, mapKey } = require('./config');
const nodemailer = require('nodemailer');


const PORT = process.env.PORT || 80;

//Middleware

app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})
console.log(mapKey);
app.post('/', (req, res)=>{
    console.log(req.body);
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: mail,
            pass: passmail
        }
    });

    const mailOptions = {
        from: req.body.email,
        to:process.env.MY_MAIL,
        subject:`Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message

    }
    transporter.sendMail(mailOptions, (error, info)=>{
        if (error){
            console.log(error)
            res.send('error')
        }else{
            console.log('Email sent ' + info.response)
            res.send('success')
        }
    })
    
})


app.listen(PORT, ()=>{
    console.log(`Server Running on port ${PORT}`)
})
