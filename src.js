const rangosCO =[
    {'estandar': {'Parametro CO en rango estandar':[0, 10]}},
    {'fuera de rango': {'Parametro CO fuera de rango':[11,15]}},
]

const rangosCO2 =[
    {'estandar': {'Parametro CO2 en rango estandar':[0,20]}},
    {'fuera de rango': {'Parametro CO2 fuera de rango': [21,30]}},
]

const rangosHC =[
    {'estandar': {'Parametro HC en rango estandar':[0,10000]}},
    {'fuera de rango': {'Parametro HC fuera de rango':[10001,11000]}},
]
const rangosO2 =[
    {'estandar': {'Parametro O2 en rango estandar':[0,22]}},
    {'fuera de rango': {'Parametro O2 fuera de rango': [23,30]}},
]

const calcularPorcentajes =(limiteCO, limiteCO2, 
    limiteHC, limiteO2, valorCO, valorCO2, valorHC, valorO2)=>{
        porcentajeCO = (valorCO/limiteCO)*100;
        porcentajeCO2= (valorCO2/limiteCO2)*100;
        porcentajeHC =(valorHC/limiteHC)*100;
        porcentajeO2 = (valorO2/limiteO2)*100;

        resultado = {"porcentajeCO":porcentajeCO,"porcentajeCO2":porcentajeCO2, "porcentajeHC":porcentajeHC, "porcentajeO2":porcentajeO2}

        return resultado;
    }


function registrarCO(valor){
    let estandarCoMin = rangosCO[0].estandar["Parametro CO en rango estandar"][0];
    let estandarCoMax = rangosCO[0].estandar["Parametro CO en rango estandar"][1];
    let fueraRangoCoMin = rangosCO[1]['fuera de rango']['Parametro CO fuera de rango'][0]
    let fueraRangoCoMax = rangosCO[1]['fuera de rango']['Parametro CO fuera de rango'][1]
    if(valor>= estandarCoMin && valor <= estandarCoMax){
        return 'Parametro CO en rango estandar'
    }else if(valor>= fueraRangoCoMin && valor <= fueraRangoCoMax){
        return 'Parametro CO fuera de rango';
    }else{
        return  'fuera_de_rango';
    }
}

function registrarCO2(valor){
    let estandarCo2Min = rangosCO2[0].estandar["Parametro CO2 en rango estandar"][0];
    let estandarCo2Max = rangosCO2[0].estandar["Parametro CO2 en rango estandar"][1];
    let fueraRangoCo2Min = rangosCO2[1]['fuera de rango']['Parametro CO2 fuera de rango'][0]
    let fueraRangoCo2Max = rangosCO2[1]['fuera de rango']['Parametro CO2 fuera de rango'][1]
    if(valor>= estandarCo2Min && valor <= estandarCo2Max){
        return 'Parametro CO2 en rango estandar'
    }else if(valor>= fueraRangoCo2Min && valor <= fueraRangoCo2Max){
        return 'Parametro CO2 fuera de rango';
    }else{
        return  'fuera_de_rango';
    }
}

function registrarHC(valor){
    let estandarHCMin = rangosHC[0].estandar["Parametro HC en rango estandar"][0];
    let estandarHCMax = rangosHC[0].estandar["Parametro HC en rango estandar"][1];
    let fueraRangoHCMin = rangosHC[1]['fuera de rango']['Parametro HC fuera de rango'][0]
    let fueraRangoHCMax = rangosHC[1]['fuera de rango']['Parametro HC fuera de rango'][1]
    if(valor>= estandarHCMin && valor <= estandarHCMax){
        return 'Parametro HC en rango estandar'
    }else if(valor>= fueraRangoHCMin && valor <= fueraRangoHCMax){
        return 'Parametro HC fuera de rango';
    }else{
        return  'fuera_de_rango';
    }
}

function registrarO2(valor){
    let estandarO2Min = rangosO2[0].estandar["Parametro O2 en rango estandar"][0];
    let estandarO2Max = rangosO2[0].estandar["Parametro O2 en rango estandar"][1];
    let fueraRangoO2Min = rangosO2[1]['fuera de rango']['Parametro O2 fuera de rango'][0]
    let fueraRangoO2Max = rangosO2[1]['fuera de rango']['Parametro O2 fuera de rango'][1]
    if(valor>= estandarO2Min && valor <= estandarO2Max){
        return 'Parametro O2 en rango estandar'
    }else if(valor>= fueraRangoO2Min && valor <= fueraRangoO2Max){
        return 'Parametro O2 fuera de rango';
    }else{
        return  'fuera_de_rango';
    }
}

    console.log(rangosCO[1]['fuera de rango']['Parametro CO fuera de rango'][0])
    module.exports.calcularPocentajes   =   calcularPorcentajes;
    module.exports.registrarCO          =   registrarCO;
    module.exports.registrarCO2         =    registrarCO2;
    module.exports.registrarHC          =    registrarHC;
    module.exports.registrarO2          =    registrarO2;

    