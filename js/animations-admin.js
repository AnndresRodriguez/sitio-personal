
var formulario = $('formulario-panel'),
    buttonSubmit = $('.btn-acceder'),
    email = $('#correo'),
    pass = $('#contrasenia');



buttonSubmit.click(function(e){

		e.preventDefault();
		var datos = formulario.serialize();
		var ruta  = formulario.attr('action');

		$.ajax({
			url: ruta,
			type: 'post',
			dataType: 'json',
			data: datos,
			encode:true;
		})
		.done(function(data) {
			
			if(data.valido ==true){

				$('.btn-editarHeader').fadeIn(500);


			}

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		


})
