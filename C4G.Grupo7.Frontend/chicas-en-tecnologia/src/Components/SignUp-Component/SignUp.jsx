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
            <div>
                <div class="container spaceBetween">
                    <div class="row">
                    <div class="col-sm">
                    {this.formIzq()}
                    </div>
                    <div class="col-sm">
                    {this.formDer()}
                    </div>
                    </div>
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

    provincias() {
        const pronvincias = ["Buenos Aires", "Rio Negro", "Chubut", "Santa Fe", "Tierra del Fuego", "Mendoza", "Cordoba", "Formosa", "Misiones", "Corrientes", "Entre Rios", "La Pampa", "San Juan", "Catamarca", "Tucuman", "Santa Cruz"]
        return pronvincias.map(prov => <option>{prov}</option>);
    }

    formDer() {
        return(
            <div>
                <form>
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
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={event => this.setDescripcion(event)}></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputLocalidad">Localidad</label>
                        <input type="text" class="form-control" id="exampleInputLocalidad" placeholder="Pone Localidad"onChange={event => this.setLocalidad(event)}/>
                    </div>
                    <div class="form-group">
                    <label for="sel1">Select list:</label>
                    <select class="form-control" id="sel1">
                        {this.provincias()}
                    </select>
                    </div>    
            </form>
            <button class="btn btn-primary" onClick={() => this.postuar()} >Postular</button>  
        </div>

        );
    }
    formIzq() {
        return(
                <div>
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
                            <input type="date" class="form-control" id="exampleInput12/03/1994" placeholder=""onChange={event => this.setFechaNacimiento(event)}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEspecialidad">Especialidad</label>
                            <input type="text" class="form-control" id="exampleInputEspecialidad" placeholder="Pone Especialidad"onChange={event => this.setEspecialidad(event)}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputOficio">Oficio actual</label>
                            <select type="text" class="form-control" id="exampleInputOficio" placeholder="Pone Oficio actual"onChange={event => this.setOficio(event)}/>
                        </div>
                    </form>
                </div>
     
        );
    }

    renderHeader() {
        return(
            <div><br/>
            <h1 style={{textAlign: "center"}}>
                <span>Postulada</span>
            </h1><br/>
            </div>
        );
    }

    renderForm() {
        return (
            <div className="container background-abm">
                <div>
                <label class="col-sm-1"/>
                </div><br/>
                <div class="col-sm-12 displayFlex">
                    <label class="col-sm-1 col-form-label">Nombre</label>
                    <input type="text" class="form-control col-sm-4" id="inputNombre" placeholder="Ingresar nombre"onChange={event => this.setNombre(event)}/>
                    <label class="col-sm-1"/>
                    <label class="col-sm-1 col-form-label">Apellido</label>
                    <input type="text" class="form-control col-sm-4" id="inputApellido" placeholder="Ingresar apellido"onChange={event => this.setApellido(event)}/>
                </div><br/>
                <div class="col-sm-12 displayFlex">
                    <label class="col-sm-2 col-form-label">Fecha de nacimiento</label>
                    <input type="date" class="form-control col-sm-3" id="inputFechaNac" onChange={event => this.setFechaNacimiento(event)}/>
                    <label class="col-sm-1"/>
                    <label class="col-sm-1 col-form-label">Localidad</label>
                    <select class="form-control col-sm-4" id="selectProvinicias"  onChange={event => this.setLocalidad(event)}>{this.provincias()}</select>
                </div><br/>
                <div class="col-sm-12 displayFlex">
                    <label class="col-sm-1 col-form-label">Oficio</label>
                    <input type="text" class="form-control col-sm-4" id="inputOficio" placeholder="Ingresar oficio"onChange={event => this.setOficio(event)}/>
                    <label class="col-sm-1"/>
                    <label class="col-sm-1 col-form-label">Especialidad</label>
                    <input type="text" class="form-control col-sm-4" id="inputEspecialidad" placeholder="Ingresar especialidad"onChange={event => this.setEspecialidad(event)}/>
                </div><br/>
                <div class="col-sm-12 displayFlex">
                    <label class="col-sm-1 col-form-label">Foto</label>
                    <input type="text" class="form-control col-sm-4" id="inputFoto" onChange={event => this.setFoto(event)}/>
                    <label class="col-sm-1"/>
                    <label class="col-sm-1 col-form-label">Video</label>
                    <input class="form-control col-sm-4" id="inputContenido"  onChange={event => this.setContenido(event)}></input>
                </div><br/>
                <div class="col-sm-12" style={{textAlign: "center"}}>
                    <label class="col-sm-2 col-form-label">Descripción</label>
                </div>
                <div class="col-sm-12 displayFlex">
                    <label class="col-sm-3"/>
                    <textarea rows="4" cols="210" class="form-control col-sm-6" id="inputDescripcion" onChange={event => this.setDescripcion(event)}></textarea>
                    <label class="col-sm-1"/>
                    <button class="btn btn-lg btn-secondary" onClick={() => this.postuar()} >Postular</button>  
                </div>
            </div>
        );
    }
    

    render() {
        return(
            <main>
                <body class="body-color">
                    {this.renderHeader()}
                    {this.renderForm()}
                </body>
            </main>
        );
    }


}

export default SignUp;
