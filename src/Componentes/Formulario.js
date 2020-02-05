import React, { Component } from 'react';
import OptionSelect from './OptionSelect';

class Formulario extends Component {

    monedaRef=React.createRef();
    criptoRef=React.createRef();

    cotizarMonedas = (e) =>{
        e.preventDefault();
        
        // crear el objeto
        const cotizacion ={
            moneda:this.monedaRef.current.value,
            cripto:this.criptoRef.current.value
        }


        //enviar por props

        this.props.obtenerValoresCripto(cotizacion);
    }
    
    render() { 
        return ( 
            <form onSubmit={this.cotizarMonedas}>
                <div className="form-group">
                    <label>Moneda:</label>
                    <select ref={this.monedaRef} className="form-control">
                        <option value="" disabled defaultValue>Elige tu Moneda</option>
                        <option value="USD">Dolar Estadounidense</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="GBP">Libras</option>
                        <option value="EUR">Euros</option>
                        <option value="COP">Peso Colombiano</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Criptomoneda</label>
                    <select ref={this.criptoRef} className="form-control">
                        {Object.keys( this.props.monedas ).map(key => (
                            //console.log(this.props.monedas[key])
                            <OptionSelect key={key} moneda = {this.props.monedas[key]} ></OptionSelect>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Cotizar"></input>
                </div>
            </form>
        );
    }
}
 
export default Formulario;