function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username : "<sender’s email address>",
        Password : "<email password>",
        To : '<recipient’s email address>',
        From : "<sender’s email address>",
        Subject : "<email subject>",
        Body : "<email body>",
    })
    .then(function(message){
        alert("mail sent successfully")
    });
}
 function sendEmail(){

     const b= document.getElementById("22").value;
     const c= document.getElementById("33").value;
     const a = 'mailto:0224208@up.edu.mx?subject='+b+'&body='+c;

     document.getElementById("action").href=a;
 }
