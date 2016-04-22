import { Meteor } from 'meteor/meteor'
import "./admin.html";
import { zagvaruud } from '../../api/zagvaruud.js';

Template.admin.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    console.log(Meteor.userId());
    console.log(Meteor.user().emails);
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
