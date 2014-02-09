
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.login = function(req, res){
    if (req.body.username=='admin' && req.body.password=='admin') {
//        res.send('<script>alert("登录成功.")</script>');
        res.redirect('main');
    } else {
        res.send('<script>alert("账号错误.");history.go(-1);</script>');
    }

};