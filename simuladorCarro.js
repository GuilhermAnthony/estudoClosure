const simuladorCarro = (function () {

    let velocidade = 0;

    function ajustarVelocidade(km) {
        velocidade += km;
    }

    return {
        acelerar(maisVeloc) {
        ajustarVelocidade(maisVeloc);
        },

        freiar(menosVeloc) {
	    ajustarVelocidade(-menosVeloc);
        },

        mostrarVelocidade() {
        if (velocidade > 0) {
            console.log(`O carro esta a ${velocidade} KM/h`);
        } else {
            console.log(`O carro esta de ré a ${velocidade} KM/h`);
        }
        
        }
    }
})();

simuladorCarro.mostrarVelocidade();

simuladorCarro.acelerar(30);
simuladorCarro.mostrarVelocidade();

simuladorCarro.acelerar(30);
simuladorCarro.mostrarVelocidade();

simuladorCarro.freiar(20);
simuladorCarro.mostrarVelocidade();

simuladorCarro.freiar(20);
simuladorCarro.mostrarVelocidade();

simuladorCarro.freiar(20);
simuladorCarro.mostrarVelocidade();

simuladorCarro.freiar(20);
simuladorCarro.mostrarVelocidade();
