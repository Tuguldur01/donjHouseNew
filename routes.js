FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});

FlowRouter.route('/zagvaruud', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "zagvaruud"});
  }
});

FlowRouter.route('/howitworks', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "howitworks"});
  }
});

// uilchilgee

FlowRouter.route('/suudrevch', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "suudrevch"});
  }
});

FlowRouter.route('/bassein', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "bassein"});
  }
});

FlowRouter.route('/mdotorlogoo', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "mdotorlogoo"});
  }
});

FlowRouter.route('/gtohijilt', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "gtohijilt"});
  }
});

FlowRouter.route('/ghudag', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "ghudag"});
  }
});

// zagvaruud

FlowRouter.route('/zagvaruud', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "zagvaruud"});
  }
});

FlowRouter.route('/zagvaruud/elite', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "elite"});
  }
});

FlowRouter.route('/zagvaruud/modern', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "modern"});
  }
});

FlowRouter.route('/zagvaruud/songodog', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "songodog"});
  }
});

FlowRouter.route('/zagvaruud/dunzen', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "dunzen"});
  }
});

FlowRouter.route('/zagvaruud/canada', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "canada"});
  }
});

FlowRouter.route('/zagvaruud/engiin', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "engiin"});
  }
});

FlowRouter.route('/zuunnast', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "zuunnast"});
  }
});

FlowRouter.route('/blog', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "blog"});
  }
});

FlowRouter.route('/contact', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "contact"});
  }
});

FlowRouter.route('/admin', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "admin"});
  }
});

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render("notFound");
    }
};
//
// FlowRouter.notFound = {
//   action: function() {
//     BlazeLayout.render('masterLayout', {
//       footer: "footer",
//       main: "pageNotFound",
//       nav: "nav",
//     });
//   }
// };
