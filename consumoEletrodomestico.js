const consumoEletrodomestico = (function () {

    let potencia;
    let tempo;
    let consumo;

    function calcularConsumo() {
        consumo = potencia * tempo;
    }

    return {
        potenciaEquip(watt) {
	    potencia = watt;
            calcularConsumo();
        },

        tempoUso(horas) {
	    tempo = horas;
            calcularConsumo();
        },

        calcularConsumo() {
            console.log(`Consumo de energia: ${consumo} kWh`);
        }
    }
})();

consumoEletrodomestico.potenciaEquip(1500);
consumoEletrodomestico.tempoUso(2);

consumoEletrodomestico.calcularConsumo()
