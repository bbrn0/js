const listaNeumaticos = [
    {
        medida: "185/65 R15",
        descripcion: "Neumático Pirelli de alto rendimiento para todas las condiciones climáticas."
    },
    {
        medida: "190/70 R16",
        descripcion: "Neumático Pirelli de alto rendimiento para todas las condiciones climáticas."
    },
    {
        medida: "180/70 R15",
        descripcion: "Neumático Pirelli de alto rendimiento para todas las condiciones climáticas."
    }
]


function buscarMedida(){
    const buscarNeumatico = prompt(`Bienvenido al simulador de compras, las medidas de neumaticos disponibles son las siguientes:
    
        185/65 R15
        180/70 R15
        190/70 R16
            
Ingrese la medida de neumatico que desea comprar:`).toLowerCase()

    let neumaticoEncontrado = null
    for (let i = 0; i < listaNeumaticos.length; i++){
        if (listaNeumaticos[i].medida.toLowerCase().includes(buscarNeumatico)){
            neumaticoEncontrado = listaNeumaticos[i]
            break
        }
    }
    if (neumaticoEncontrado) {
        alert(`Medida encontrada
Medida: ${neumaticoEncontrado.medida}
descripcion: ${neumaticoEncontrado.descripcion}`)
    }else{
        alert("Medida de neumatico no disponible")
    }
    
}
