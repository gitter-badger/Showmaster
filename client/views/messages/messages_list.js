Template.messagesList.helpers({
	messages: function() {
		return Messages.find();
	}
});

Template.messagesList.events({
	'submit form': function(event) {
		event.preventDefault();

		var messageInput = $(event.target).find('[name=message]');

		Messages.insert({
			timestamp: moment().format(),
			body: messageInput.val(),
			author: 'Dummy'
		});

		// Empty text input field
		messageInput.val('');

		// Scroll to bottom
		var el = $('.messages');
		el.scrollTop(el.prop('scrollHeight') - el.height());
	}
});
