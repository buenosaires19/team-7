import React from 'react';
//import API from '../../ApiComponent'
import './style.css'
import logo from '../logo-big.svg'
import chica from '../Components/Pictures/chica.jpg'
import API from '../API'


class inicio extends React.Component {

    constructor() {
        super();
        this.state = {
            usuarioSeleccionado: {
                "id": 0,
                "name": "",
                "surname": "",
                "email": "",
                "dni": 0
            }
        } 

    }

    componentDidMount(){
        API.get("/postulante/masvisitado").then(users => this.setState({usuarios: users})).catch(console.log("Fail"));
    }

    renderUsuarios() {

        return (
            <div class="card">
                {this.state.usuarios.map(usuario =>
                    <div class="card-body" onClick={() =>
                        this.setState({ usuarioSeleccionado: usuario })}
                        style={{
                            backgroundColor: this.state.usuarioSeleccionado.name
                                && this.state.usuarioSeleccionado.name === usuario.name ? 'red' : 'beige',
                            fontSize: '30px',
                        }}
                    >
                        {usuario.name}

                    </div>
                )}
            </div>
        );
    }

    goPostulante() {
        this.props.history.push('/postulante');
    }

    /* goUser() {
         this.props.history.push(`/user/${this.state.usuarioSeleccionado.id}`);
     }
 
     deleteUser() {
         API.delete(`/user/${this.state.usuarioSeleccionado.id}/delete`)
         .then(console.log(this.state)).catch(console.log("No pillo"))
     }
     */
    renderButtons() {
        return (
            <div id="full-screen" className="container-fluid">
                <div className="container">
                    <div className="row">
                        <img src={logo}  alt="chica en tecnologia"/> 
                    </div>
                    <div className="row ">
                    
                    <div id='fade' className="container text-center"> 
                    <img src={chica} class="rounded achicarImg" alt="chica test"/> <h1>Maria elena</h1><h2>Psicologa</h2>
                        
                    </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-outline-light" onClick={() => this.goPostulante()}> Postular </button>
                        </div>
                        <div className="col-md-6">
                        <button type="button" class="btn btn-outline-light">Listas</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <body>
                <div>
                    {this.renderButtons()}
                </div>
            </body>
        );
    }
}

export default inicio;