import './zagvaruud.html';
import { zagvaruud } from '../../api/zagvaruud.js';

Template.zagvaruud.helpers({
  Zagvars() {
    return zagvaruud.find({});
  },
});

Template.zagvaruud.events({
    "click .delete"() {
        if (confirm("Усгахад итгэлтэй байна уу?")) {
            zagvaruud.remove({_id:this._id});
        } else {
            // yu ch bitgii hii
        }
    }
});
