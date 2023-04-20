 
document.getElementById("myForm").addEventListener("submit", function(event) {
	event.preventDefault();  
  
	 
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
  
	// format email message
	var body = "Name: " + name + "\n\nEmail: " + email + "\n\nMessage: " + message;
  
	 
	window.location.href = "mailto:sukhadadhikari3@gmail.com?subject=New Message&body=" + encodeURIComponent(body);
	alert("You Message is Sent!!!");
	location.reload();
  });
  