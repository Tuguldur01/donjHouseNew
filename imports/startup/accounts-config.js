import { Accounts } from 'meteor/accounts-base';

var myPostLogout = function(){
    //example redirect after logout
    Router.go('/home');
};

AccountsTemplates.configure({
    texts: {
      title: {
        // changePwd: "Password Title",
        // enrollAccount: "Enroll Title",
        // forgotPwd: "Forgot Pwd Title",
        // resetPwd: "Reset Pwd Title",
        signIn: "Нэвтрэх",
        // signUp: "Sign Up Title",
        // verifyEmail: "Verify Email Title",
      }
    }
});
AccountsTemplates.configure({
    texts: {
        button: {
          changePwd: "Password Text",
          enrollAccount: "Enroll Text",
          forgotPwd: "Forgot Pwd Text",
          resetPwd: "Reset Pwd Text",
          signIn: "Нэвтрэх",
          signUp: "Sign Up Text",
        }
    }
});
AccountsTemplates.configure({
    forbidClientAccountCreation: true
});
