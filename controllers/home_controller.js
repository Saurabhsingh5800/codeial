// module.exports.home = function(req,res){
//     return res.end('<h1>express is up for codial !!</h1>');
// };

module.exports.home = function(req,res){
    console.log(req.cookies);
    // change the cookie at response...
    res.cookie('user_id',25);
    return res.render('home', {
        title:'home'
        
    });
};