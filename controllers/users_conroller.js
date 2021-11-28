// create another controller for user profile

const User = require('../models/user');


module.exports.profile = function(req,res){
    // res.end('<h1>users profile is ......</h1>');
    return res.render('user_profile',{
        title:'User Profile'
    });
};

// render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up', {
        title: 'codial|signUp'
    })
}

//  render the sign in page 
module.exports.signIn = function(req,res){
    return res.render('user_sign_in', {
        title: 'codial|signIn'
    })
}

// create action for sign up
module.exports.create= function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('error in finding the user in the sign up');
            return ;
        }
        // if user is not here so we create a user
        if(!user){
            // create a user
            User.create(req.body,function(err , user){
                if(err){
                    console.log('error is finding while creating a user ');
                    return ;
                }
                return res.redirect('/users/sign-in');
            });

        } else{
            return res.redirect('back');
        }
    });
}
// now go to roututer and define the router for this creating sign up

// set up the action for sign in and create a session for user

module.exports.create_session = function(req ,res){
    // to do later......

}