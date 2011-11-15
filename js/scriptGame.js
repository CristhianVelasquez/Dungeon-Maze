$(document).ready(function(){
	$('.character').corner();
	$('#play').hide();
	var jugadorSeleccionado=null;
	//functions
	function hero(ataque,defensa,danio,vida){
		this.ataque=ataque;
		this.defensa=defensa;
		this.danio=danio;
		this.vida=vida;
	}
	function transicion(id1,id2){
		$('#'+contenido1).fadeOut(function(){
			$('#'+contenido2).fadeIn();
		});	
	}
	var warrior=new hero(10,14,15,100);
	var cleric=new hero(5,16,5,150);
	var valkiria=new hero(10,12,20,50);
	var heroes=new Array(3);
	heroes[0]=warrior;
	heroes[1]=cleric;
	heroes[2]=valkiria;
		
	$('#characters li img').click(function(){
		
		jugadorSeleccionado=heroes[this.id];
		alert(jugadorSeleccionado.ataque);

	});
	
	
	$('#seleccionar').click(function(){		
	});
	
});
	