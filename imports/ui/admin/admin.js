import { Meteor } from 'meteor/meteor'
import "./admin.html";
import { zagvaruud } from '../../api/zagvaruud.js';

Template.admin.helpers({
  Zagvars() {
    return zagvaruud.find({});
  },
});

Template.admin.events({
    "click .delete"() {
        if (confirm("Усгахад итгэлтэй байна уу?")) {
            zagvaruud.remove({_id:this._id});
        } else {
            // yu ch bitgii hii
        }
    }
});


Template.admin.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    console.log(Meteor.user().username);
    // elment ees utgaa awah
    const target = event.target;
    const title = target.title.value;
    const turul = target.turul.value;
    const tailbar = target.tailbar.value;
    const plan = target.plan.value;
    const taluud = target.taluud.value;
    const deerees = target.deerees.value;
    const ogtlol = target.ogtlol.value;

    // collection ruu data nemeh
    zagvaruud.insert({
      title,
      turul,
      tailbar,
      tailbar,
      plan,
      taluud,
      deerees,
      ogtlol,
      oruulsan: Meteor.user().username,
      createdAt: new Date(), // odoogiin tsag
    });

    // form tseverleh
    target.title.value = '';
    target.turul.value = '';
    target.tailbar.value = '';
    target.plan.value = '';
    target.taluud.value = '';
    target.deerees.value = '';
    target.ogtlol.value = '';
  },
})
