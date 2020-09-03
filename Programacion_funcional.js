//PROGRAMACION FUNCIONAL

const numerosPares = [2,4,6,8];
const double = numerosPares.map(n => n*2);

console.log(double)

//funciones recursivas

function DiasSemana(){
    console.log("lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo");
    DiasSemana();
}

DiasSemana(); 
