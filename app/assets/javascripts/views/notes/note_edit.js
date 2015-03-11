CodeGenius.Views.NoteEdit = Backbone.View.extend({
  template: JST["notes/note_edit"],

  events: {
    "click button.note-save": "save",
    "click button.note-cancel": "cancel"
  },

  render: function () {
    this.$el.html(this.template({note: this.model}));
    return this;
  },

  cancel: function (event) {
    event.preventDefault();
    this.remove();
    Backbone.history.navigate("", {trigger: true});
  },

  save: function (event) {
    event.preventDefault();
    this.model.save({body: $("textarea").val()}, {
      success: function () {
        Backbone.history.navigate(
          "/notes/" + this.model.id,
          {trigger: true}
        );
      }.bind(this)
    });
  }
});
