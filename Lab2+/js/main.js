$(document).ready(function ($) {
        $('#mob-trigger').click(function () {
            jQuery(".main-menu nav").slideToggle(500);
        });
''
        $('#message-submit').click(function () {
            let messageText = $("#fan-message").val();
            let message = $('<div class="some-message clearfix"></div>');

            message.html('<div class="text"><p>' + messageText + '</p></div><div class="author">Formula1 Fan</div>');
            message.appendTo('#main-messages');

            let currentDate = new Date();
            let datetime = currentDate.getDate() + "."
                + (currentDate.getMonth() + 1) + "."
                + currentDate.getFullYear() + ", "
                + currentDate.getHours() + ":"
                + currentDate.getMinutes();
            let messageDate = $('<div class="date"></div>');

            messageDate.html(datetime);
            messageDate.appendTo('.some-message:last-child');

            $('#fan-message').val('');
            $('#message-submit').attr('disabled', true);
        });

        $('#message-submit').attr('disabled', true);
        $('#fan-message').on('keyup', function () {
            let textarea_value = $("#texta").val();
            if (textarea_value !== '') {
                $('#message-submit').attr('disabled', false);
            } else {
                $('#message-submit').attr('disabled', true);
            }
        });
    }
  );
