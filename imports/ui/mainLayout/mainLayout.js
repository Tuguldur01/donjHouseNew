import './mainLayout.html';



Template.mainLayout.events({
  'click .logout'() {
    Meteor.logout();
  }
});
