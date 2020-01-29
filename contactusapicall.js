//contact us page message sending api call
function sendMessage(){
             document.getElementById("sendmessagebtn").disabled=true;   
             var firstName =document.getElementById("firstname").value;
             var Email = document.getElementById("email").value;
             var mobilenumber = document.getElementById("mobilenumber").value;
             var message = document.getElementById("message").value;
            var regUrl = "/institude/support/"
             if(firstName == "" || Email == "" || message== ""){
              event.preventDefault();
              document.getElementById("errorMessage").removeAttribute("hidden");  
              document.getElementById("sendmessagebtn").disabled=false;
             }
             else{
            document.getElementById("errorMessage").setAttribute("hidden","true");  
            let payload = {
                "firstName": firstName,
                "em": Email,
                "mes": message,
                "mob": mobilenumber
                }
                console.log("payload",payload);
                 event.preventDefault();
                 $.ajax({
                type: 'POST',
                url: regUrl,
                data: JSON.stringify(payload),
                dataType: 'json',
                contentType: 'application/json',
                success: function(data) {

                    if (data && data.status == 200) {
                       window.location.href="thank-you.html";

                    } else if (data && data.status == 500) {
                        setAlert(data.message);

                    }
                },
                error: function(data) {

                },
            });
             }
        }
