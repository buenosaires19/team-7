import React from 'react';
//import API from '../../ApiComponent'
import './style.css'


class ComponenteABM extends React.Component {

    constructor() {
        super();

    }



    renderUsuarios() {

        return(
            <div class="card">
                {this.state.usuarios.map(usuario =>
                    <div class="card-body" onClick={() => 
                    this.setState({usuarioSeleccionado: usuario})}
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
        return(
        <div class="Button-flex">
     
            <button type="button" className="btn btn-primary" onClick={() =>this.goPostulante()}> Postular </button> 
        
            <button type="button" className="btn btn-primary" > Listado </button>
    
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

export default ComponenteABM;