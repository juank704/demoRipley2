function descuentate(){
    var pop = "";
	pop += 	"<div class='col-xs-12 col-sm-12 col-md-12'>"
	pop += 		"<div class='col-xs-6 portlet'>";
	pop += 			"<h5 style='color: #337ab7;font-weight: bold'>Fecha de Cosecha</h5>";
	pop += 			"<input name='fecha' class='form-control required-modal' id='fecha'>";
	pop += 		"</div>";
	pop += 		"<div class='col-xs-6 portlet'>";
	pop += 			"<h5 style='color: #337ab7;font-weight: bold'>Nombre</h5>";
	pop += 			"<input class='form-control required-modal' id='nombre'>";
	pop += 		"</div>";
	pop += 	"</div>";
	pop += 		"<div style='text-align: center;'>";
	pop += 			"<a class='btn green-dark submit-modal' onclick='crearVariedad()'><i class='icon-cloud-upload'></i> Aceptar</a>";
	pop += 			"<a class='btn red' onclick='closeModal()'>Cancelar</a>";
	pop += 		"</div>";
	popUp("Agrega descuento", pop, true, "450px", true);
}

function popUp(title, html, animation, width, showCloseButton){
	swal({
		position: 'center',
		title: title,
		html: html,
		animation: !animation,
		customClass: 'animated fadeInDown',
		width: width,
		showCloseButton: showCloseButton,
		showConfirmButton: false,
		focusConfirm: true,
		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false
	});
	activateRequiredModal();
//	$(".swal2-header").draggable();
}

