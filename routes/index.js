
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('login', { title: 'Express' });
};

exports.main = function(req, res){
    res.render('main', { title: 'Express' });
};