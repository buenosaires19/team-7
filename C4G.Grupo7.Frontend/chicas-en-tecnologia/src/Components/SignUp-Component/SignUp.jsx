import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SignUp-Component/style.css'
import API from '../../API.js';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            nombre: "",
            apellido: "",
            fechaNacimiento: "",
            descripcion: "",
            localidad: {
                pais: "",
                provincia: "",
                localidad: "",  
            },
            contenido: "",
            foto: "",
            areaEspecializacion: "",
        }
    }

    componentDidMount() {

    }

    renderContent() {
        return(
            <div class="card">
                <div class="card-body">
                    {this.form()}
                 </div>             
            </div>    
        );
    }

    setNombre(event) {
        this.setState({nombre: event.target.value})
    }

    setApellido(event) {
        this.setState({apellido: event.target.value})
    }

    setFechaNacimiento(event) {
        this.setState({fechaNacimiento: event.target.value})
    }

    setEspecialidad(event) {
        this.setState({areaEspecializacion: event.target.value})
    }

    setOficio(event) {
        //this.setState({nombre: event.target.value})
    }

    setDescripcion(event) {
        this.setState({descripcion: event.target.value})
    }

    setLocalidad(event) {
        this.setState({localidad: event.target.value})
    }

    setFoto(event) {
        this.setState({foto: event.target.value})
    }

    setContenido(event) {
        this.setState({contenido: event.target.value})
    }

    postuar() {
        API.put('/postular/crear', this.state).then().catch(); 
    }

    form() {
        return(
            <div class="card">
                <div class="card-body">
            <form>
                <div class="form-group">
                    <label for="exampleInputElias">Nombre</label>
                    <input type="text" class="form-control" id="exampleInputElias" placeholder="Pone nombre"onChange={event => this.setNombre(event)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputJuarez">Apellido</label>
                    <input type="text" class="form-control" id="exampleInputJuarez" placeholder="Pone Apellido"onChange={event => this.setApellido(event)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInput12/03/1994">Fecha de nacimiento</label>
                    <input type="text" class="form-control" id="exampleInput12/03/1994" placeholder="Pone Fecha de nacimiento"onChange={event => this.setFechaNacimiento(event)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEspecialidad">Especialidad</label>
                    <input type="text" class="form-control" id="exampleInputEspecialidad" placeholder="Pone Especialidad"onChange={event => this.setEspecialidad(event)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputOficio">Oficio actual</label>
                    <input type="text" class="form-control" id="exampleInputOficio" placeholder="Pone Oficio actual"onChange={event => this.setOficio(event)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputFoto">Foto</label>
                    <input type="text" class="form-control" id="exampleInputFoto" placeholder="Pone Foto"onChange={event => this.setFoto(event)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputVideo">Video</label>
                    <input type="text" class="form-control" id="exampleInputVideo" placeholder="Pone url del video"onChange={event => this.setContenido(event)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputDescripcion">Descripcion</label>
                    <input type="text" class="form-control" id="exampleInputDescripcion" placeholder="Pone Descripcion"onChange={event => this.setDescripcion(event)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputLocalidad">Localidad</label>
                    <input type="text" class="form-control" id="exampleInputLocalidad" placeholder="Pone Localidad"onChange={event => this.setLocalidad(event)}/>
                </div>
                <button class="btn btn-primary" onClick={() => this.postuar()} >Postular</button>
            </form>
            </div>
            </div>  
        );
    }


    render() {
        return(
            <main>
                <body class="body-sign">
                    {//this.renderHeader()
                    }
                    {this.renderContent()}
                    {//this.renderFooter()
                    }
                </body>
            </main>
        );
    }


}

export default SignUp;
