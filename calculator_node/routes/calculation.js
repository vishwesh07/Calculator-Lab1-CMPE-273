var express = require('express');
var router = express.Router();

router.post('/doCalculation', function (req, res, next) {

    var n1 = req.body.numbers.n1;
    var n2 = req.body.numbers.n2;
    var operation = (req.body.operation).toString();
    var result ;

    if(operation === "Addition"){
        result =  parseInt(n1)+parseInt(n2);
    }

    if(operation === "Subtraction"){
        result =  n1-n2;
    }

    if(operation === "Multiplication"){
        result =  n1*n2;
    }

    if(operation === "Division"){
        result =  n1/n2;
    }

    var message = operation+" of "+n1+" and  "+n2+" is "+result+".";

    return res.json({message: message, result: result});

});

module.exports = router;

