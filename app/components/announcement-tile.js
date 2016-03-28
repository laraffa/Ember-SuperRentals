import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
 actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    delete(announcement) {
         if (confirm('Are you sure you want to delete this announcement?')) {
           this.sendAction('destroyAnnouncement', announcement);
         }
       }
     }
});
