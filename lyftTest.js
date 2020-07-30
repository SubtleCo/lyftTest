const express    = require("express"),
	  app 	     = express();

let returnEveryThird = input => {
	let result = "";
	for (let i = 2; i < input.length; i+=3) {
        result += input[i];
    }
    return result;
}

app.post("/test",(req,res) =>{
	let result = returnEveryThird(req.query.string_to_cut);
	res.send(JSON.stringify({return_string:result}));
});

app.listen(process.env.PORT||3000, process.env.IP, function(){
	console.log("Listening on port 3000")
});