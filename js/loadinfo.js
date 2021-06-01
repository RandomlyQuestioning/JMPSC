function contacted () {
        var request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/848381735015677962/o1HHcWQdky-h8BWegrkfuc7Z967ze3uaHb0Pl05Lazf-ZyP3qNNrVMZaIKvH1o5icw0b");
        request.setRequestHeader('Content-type', 'application/json');
        const email = document.getElementById("contemail").value;
        const message = document.getElementById("contmessage").value;
        const name = document.getElementById("contname").value;
        const contop = "Someone has asked a question! \n**Name:** "+name+"\n**Email:** "+email+"\n**Message:** "+message;
        var params = {
        username: "",
        avatar_url: "",
        content: contop
      };
        
      request.send(JSON.stringify(params)); 
};   
        
