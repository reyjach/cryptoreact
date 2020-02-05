import React, { Component } from 'react';

class Resultado extends Component {

    mostrarResultado = () =>{

        const monedaCotizada=this.props.monedaCotizar;

        const {name, quotes}=this.props.cotizacion;


        

        if(!name || !quotes || !monedaCotizada) return null

        const {price, percent_change_1h, percent_change_24h, percent_change_7d} = quotes[monedaCotizada]

        return(
            <div className="bg-success py-4">
                <div className="resumen text-light text-center">
                    <h2 className="mb-4">Resumen</h2>
                    <p><span className="font-weight-bold">El precio de {name} en {monedaCotizada} es de:</span> ${(price).toFixed(2)}</p>
                    <p><span className="font-weight-bold">Porcentaje Ultima Hora:</span> %{percent_change_1h}</p>
                    <p><span className="font-weight-bold">Porcentaje Ultima Dia:</span> %{percent_change_24h}</p>
                    <p><span className="font-weight-bold">Porcentaje Ultima Semana:</span> %{percent_change_7d}</p>
                    
                </div>
            </div>
        )
    }

    render() { 
        return ( 
            <React.Fragment>
                {this.mostrarResultado()}
            </React.Fragment>
         );
    }
}
 
export default Resultado;