Template.message.helpers({
	timestampHuman: function() {
		return moment(this.timestamp).format('H:mm:ss')
	}
});

var storedScrollHeight = 0;

Template.message.rendered = function() {
	var el = $('.messages');
	var scrollHeight = el.prop('scrollHeight');

	if (storedScrollHeight < scrollHeight) {
		el.scrollTop(scrollHeight - el.height());
		storedScrollHeight = scrollHeight;
	}
}
