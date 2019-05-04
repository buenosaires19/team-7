import React from 'react';
import API from '../../API';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class ListadoPostulantes extends React.Component {

    constructor() {
        super();
        this.state = {
            postulantes: [],
        } 

    }

    /*componentDidMount(){
        API.get("/postulantes").then(users => this.setState({usuarios: users})).catch(console.log("holis"));
    }*/


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

    goNewUser() {
       this.props.history.push('/user/new');
    }

    goUser() {
        this.props.history.push(`/user/${this.state.usuarioSeleccionado.id}`);
    }

    deleteUser() {
        API.delete(`/user/${this.state.usuarioSeleccionado.id}/delete`)
        .then(console.log(this.state)).catch(console.log("No pillo"))
    }

    renderButtons() {
        return(
        <div class="Button-flex">
     
            <button type="button" className="btn btn-primary" onClick={() =>this.goNewUser()}> agregar usuario </button> 
        
            <button type="button" className="btn btn-primary" onClick={() =>this.deleteUser()}> eliminar usuario </button>
    
            <button type="button" className="btn btn-primary" onClick={() =>this.goUser()}> ver usuario </button>
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

export default ListadoPostulantes;