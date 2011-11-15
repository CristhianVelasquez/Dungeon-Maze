
$(document).ready(function(){
	$('#start').click(function(){
			$('#historias').fadeOut(function(){
				window.location="game.html";
				$('#fondoJuego').fadeIn();
				$('#historias').fadeIn();
				
				
			});
	
	});
	$('#seleccionar').click(function(){	
		
		function hero(ataque,defensa,danio,vida){
			this.ataque=ataque;
			this.defensa=defensa;
			this.danio=danio;
			this.vida=vida;
		}
			var warrior=new hero(10,14,15,100);
			var cleric=new hero(5,16,5,150);
			var valkiria=new hero(10,12,20,50);
			var heroes=new Array(3);
			heroes[0]=warrior;
			heroes[1]=cleric;
			heroes[2]=valkiria;
				
	});
	   

});
