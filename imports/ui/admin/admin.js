import "./admin.html";
import { zagvaruud } from '../../api/zagvaruud.js';

Template.admin.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const title = target.title.value;

    // Insert a task into the collection
    zagvaruud.insert({
      title,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.title.value = '';
  },
})
