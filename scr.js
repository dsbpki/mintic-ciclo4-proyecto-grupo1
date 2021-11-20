function calcularPorcentajes(limiteCO,limiteCO2,limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2 )
{
    //100 / limite otroga constante para encontar porcentaje equivalente
    let porcentajes={"porcentajeCO": valorCO*(100/limiteCO),
    "porcentajeCO2":valorCO2*(100/limiteCO2),
    "porcentajeHC" :valorHC*(100/limiteHC),
    "porcentajeO2":valorO2*(100/limiteO2)
    }

    return porcentajes;
}

module.exports.calcularPorcentajes= calcularPorcentajes;

function registrarCO(valor)
{
    if (valor<0 || valor>10)
    {
        return "fuera_de_rango"
    }
   
    return "Parámetro CO en rango estandar"

}

module.exports.registrarCO=registrarCO;

function registrarCO2(valor)
{
    if (valor<0 || valor>20)
    {
        return "fuera_de_rango"
    }    
    return "Parámetro CO2 en rango estandar"

}

module.exports.registrarCO2=registrarCO2;


function registrarHC(valor)
{
    if (valor<0 || valor>10000)
    {
        return "fuera_de_rango"
    }
  
    return "Parámetro HC en rango estandar"

}

module.exports.registrarHC=registrarHC;

function registrarO2(valor)
{
    if (valor<0 || valor>22)
    {
        return "fuera_de_rango"
    }

    return "Parámetro O2 en rango estandar"

}

module.exports.registrarO2=registrarO2;
