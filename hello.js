$(document).ready(function() {
	
                 $.ajax({  
                     url: 'https://restapitest123.azurewebsites.net/api/hits', 
                     type: 'POST',  
					 headers:{	"Access-Control-Allow-Origin":"https://htmlstaticazure.azurewebsites.net/"
							 }
                     dataType: 'json',  
                     data:{ "browser": "chrome",   "device": "PC",  "time": "15-11-2021::13:00:00",  "data": "G test1" },  
                     success: function (data, textStatus, xhr) {  
                         console.log(data);  
                     },  
                     error: function (xhr, textStatus, errorThrown) {  
                         console.log('Error in Operation');  
                     }  
                 });  

});
