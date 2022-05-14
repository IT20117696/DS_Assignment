const router = require("express").Router();
const nodemailer = require('nodemailer');

//senet confirmation mail
router.post('/moviepayment/sendemail',(req,res)=>{
    const {
        reciverMail, 
        senderMail,
        reciverName, 
        reservationid,
        movieName,
        theater,
        date} = req.body

 var mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'jayasinghesajani98@gmail.com',
              pass: '121498s@'
            }
        });       
   
   let mailDetails = {
            from : senderMail,
            to : reciverMail,
            subject : "Online Movie Reservation Confirmation Mail",
            text : "Dear"+" "+ reciverName+","+'\r\n'+'\r\n'+"Your Payment is success.Your Movie reservation ID is "+ reservationid +"."+'\r\n'+"Movie Name : "+movieName+"."+'\r\n'+"Reservation Date : "+date+"."+'\r\n'+"Theater Name :"+theater+'\r\n'+"Thank You,"+'\r\n'+"MGM Online Movie Reservation System.",
          };
 
mailTransporter.sendMail(mailDetails, function(err, data) {
      if(err) {
         res.status(200).send({ status: false, respMesg: 'Email send error' });
     } else {
        res.status(200).send({ status: true, respMesg: 'Email Sent Successfully' });
    }
 });         
});
module.exports = router;