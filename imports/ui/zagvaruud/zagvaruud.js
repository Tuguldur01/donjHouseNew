import './zagvaruud.html';
import { zagvaruud } from '../../api/zagvaruud.js';

Template.zagvaruud.helpers({
  Zagvars() {
    return zagvaruud.find({});
  },
});
