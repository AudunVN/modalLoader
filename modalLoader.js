$(document).ready(function() {
	$('.modal').modal('hide');
	$('.toggleModal').click(function(ev){
		ev.preventDefault();
		if (!!document.querySelector('body.modal-open')) {
			$('.modal').modal('hide');
		} else {
			var pid = $(this).data('modal');
			$.get('/modals/' + pid + '.txt', function(data){
				var headerRegex = /(?:<header>)(.|[\r\n])*(?:<\/header>)/g;
				var contentRegex = /(?:<content>)(.|[\r\n])*(?:<\/content>)/g;
				var headerContent = headerRegex.exec(data)[0];
				var bodyContent = contentRegex.exec(data)[0];
				document.querySelector(".modal").style.marginTop = document.querySelector("#navbar").offsetHeight+"px";
				$('.modal .modal-title').html(headerContent);
				$('.modal .modal-body').html(bodyContent);
				$('.modal').modal('show');
				document.querySelector('.modal').focus();
				$(".modal-content").click();
			});
		}
	});
});
