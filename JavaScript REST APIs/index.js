let express = require('express');
let app = express();
let pieRepo = require('./repos/pieRepo');
let router = express.Router();
let cors = require('cors');




app.use(express.json());

app.use(cors());

router.get('/', function(req, res, next){

    pieRepo.get(function(data){
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All pies retrieved",
            "data": data
           });
    }, function(err){
        next(err);
    });
});

router.get('/search', function(req, res, next){
    let searchObject = {
        "id": req.query.id,
        "name": req.query.name
    };

    pieRepo.search(searchObject, function(data){
        res.status(200).json({
            "status": 200,
            "statusText": "OK",
            "message": "All pies retrived.",
            "data": data
           });
    }, function(err){
        next(err);
    });
});

router.get('/:id', function(req, res, next){
    pieRepo.getById(req.params.id, function(data) {
        if(data){
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "Single pie retrived.",
                "data": data
               });
        }
        else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The pie '" + req.params.id +"' could not be found.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The pie '" + req.params.id + "' could not be found."
                }
            });
        }
    }, function(err){
        next(err);
    });
});

router.post('/', function(req, res, next) {
    pieRepo.insert(req.body, function(data){
        res.status(201).json({
            "status": 201,
            "statusText": "Created",
            "message": "New Pie Added.",
            "data": data
           });
    }, function(err){
        next(err);
    });
});

router.put('/:id', function(req, res, next){
    pieRepo.getById(req.params.id, function(data){
        if(data){
            pieRepo.update(req.body, req.params.id, function(data){
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "Pie '" + req.params.id + "' updated.",
                    "data": data
                   });
            });
        }
        else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The pie '" + req.params.id +"' could not be found.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The pie '" + req.params.id + "' could not be found."
                }
            });
        }
    }, function(err){
        next(err);
    });
});

router.delete('/:id', function(req, res, next){
    pieRepo.getById(req.params.id, function(data){
        if(data){
            pieRepo.delete(req.params.id, function(data){
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "The pie '" + req.params.id +"' is deleted.",
                    "data": "Pie '" + req.params.id +"' deleted.",
                   });
            });
        }
        else{
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The pie '" + req.params.id +"' could not be found.",
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The pie '" + req.params.id + "' could not be found."
                }
            });
        }
    }, function(err){
        next(err);
    });
});

router.patch('/:id', function(req, res, next){
    pieRepo.getById(req.params.id, function(data){
        if(data){
            pieRepo.update(req.body, req.params.id, function(data){
                res.status(200).json({
                    "status": 200,
                    "statusText": "OK",
                    "message": "Pie '" + req.params.id + "' patched.",
                    "data": data
                   });
            });
        }
    }, function(err){
        next(err);
    });
});


app.use('/api/', router);

var server = app.listen(5000, function() {
    console.log('Node server is running on http://localhost:5000..');
});

app.use(function(err, req, res, next){
    res.status(500).json({
        "status": 500,
                "statusText": "Internal Server Error",
                "message": err.message,
                "error": {
                    "code": "INTERNAL_SERVE_ERROR",
                    "message": err.message
                }
    });
});
