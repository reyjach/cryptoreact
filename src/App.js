import React ,{Component} from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import Resultado from './Componentes/Resultado';
import axios from 'axios';


class App extends Component{

  state = {
    monedas:[],
    cotizacion:{},
    monedaCotizar:'',
    cargando:false
  }

  async componentDidMount(){
    this.obtenerMonedas();
  }

  obtenerMonedas = async () => {
    const url = `https://api.coinmarketcap.com/v2/ticker/`;

    await axios.get(url)
      .then(respuesta =>{
        this.setState({
          monedas:respuesta.data.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  //cotizar una cripto en base a una moneda

  obtenerValoresCripto = async (monedas) => {
    const {moneda, cripto} = monedas;
    const url = `https://api.coinmarketcap.com/v2/ticker/${cripto}/?convert=${moneda}`;

    await axios.get(url)
      .then(respuesta =>{
        this.setState({
          cargando:true
        })
       setTimeout(() => {
        this.setState({
          cotizacion:respuesta.data.data,
          monedaCotizar:moneda,
          cargando:false
        })
       }, 1000);
      })
      .catch(error => {
        console.log(error)
      })
    
  }


  render() {

    const cargando = this.state.cargando;

    let resultado;

    if(cargando) {
      resultado= <div className="sk-cube-grid">
                  <div className="sk-cube sk-cube1"></div>
                  <div className="sk-cube sk-cube2"></div>
                  <div className="sk-cube sk-cube3"></div>
                  <div className="sk-cube sk-cube4"></div>
                  <div className="sk-cube sk-cube5"></div>
                  <div className="sk-cube sk-cube6"></div>
                  <div className="sk-cube sk-cube7"></div>
                  <div className="sk-cube sk-cube8"></div>
                  <div className="sk-cube sk-cube9"></div>
                </div>
    }else {
      resultado= <Resultado cotizacion={this.state.cotizacion} monedaCotizar={this.state.monedaCotizar}></Resultado>
    }

    return (
      <div className="container">
        <Header titulo="Cotiza Criptomonedas al instante"></Header>
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
            <Formulario monedas={this.state.monedas} obtenerValoresCripto={this.obtenerValoresCripto}></Formulario>
            {resultado}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
