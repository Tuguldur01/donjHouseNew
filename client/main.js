import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../imports/ui/home/home.js';
import '../imports/ui/ajiliinDaraalal/howitworks.js';
import '../imports/ui/zagvaruud/zagvaruud.js';
import '../imports/ui/mainLayout/mainLayout.js';
import '../imports/ui/contact/contact.js';
import '../imports/ui/admin/admin.js';
import '../imports/ui/zuunnast/zuunnast.js';
import '../imports/startup/accounts-config.js';
import { zagvaruud } from '/imports/api/zagvaruud.js';

window.zagvaruud = zagvaruud
