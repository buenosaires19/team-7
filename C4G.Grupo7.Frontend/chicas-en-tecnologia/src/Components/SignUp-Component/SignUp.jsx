import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SignUp-Component/style.css'
import API from '../../API.js';


class SignUp extends React.Component {



    constructor() {
        super();
        this.state = {
            
                nombre: "Test",
                apellido: "sdfgsf",
                fechaNacimiento: "2019-05-04",
                oficio: "CIENTIFICA",
                descripcion: "Hija de doctor house",
                localidad: {
                    pais: "Argentina",
                    provincia: "Buenos Aires",
                    localidad: "Merlo"
                },
                contenido: "www.google.com",
                foto: "https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/rosalia-paz.jpg",
                areaEspecializacion: "Ofmalmologa",
            
        }
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
        this.setState({oficio: event.target.value})
    }

    setDescripcion(event) {
        this.setState({descripcion: event.target.value})
    }

    setLocalidad(event) {
        console.log(event.target.value);
        
        const x = {pais: "Argentina",
        provincia: event.target.value,
        localidad: "Merlo"}
        this.setState({localidad: x})
    }

    setFoto(event) {
        this.setState({foto: event.target.value})
    }

    setContenido(event) {
        this.setState({contenido: event.target.value})
    }

    postuar() {
        API.put('/postulante/crear', this.state).then().catch(); 
        this.props.history.push(`/`);
    }

    provincias() {
        const pronvincias = ["Buenos Aires", "Rio Negro", "Chubut", "Santa Fe", "Tierra del Fuego", "Mendoza", "Cordoba", "Formosa", "Misiones", "Corrientes", "Entre Rios", "La Pampa", "San Juan", "Catamarca", "Tucuman", "Santa Cruz"]
        return pronvincias.map(prov => <option>{prov}</option>);
    }

    oficios(){
        const oficios = ["DOCTORA", "PROGRAMADORA", "CIENTIFICA", "NANOTECNOLOGA"];
        return oficios.map(ofi => <option>{ofi}</option>);
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
                    <select class="form-control col-sm-4" id="selectOficio"  onChange={event => this.setOficio(event)}>{this.oficios()}</select>
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

    irInicio() {
        this.props.history.push("/");
    }

    renderMenu() {
        return(
        <nav class="navbar navbar-dark bg-dark">
            <div class="navbar-brand" onClick={() => this.irInicio()}>Inicio</div>
            <a href="https://www.chicasentecnologia.org/"><span>FAQ</span></a>
        </nav>
        );
    }
    

    render() {
        return(
            <main>
                {this.renderMenu()}
                <body class="body-color">
                    {this.renderHeader()}
                    {this.renderForm()}
                </body>
            </main>
        );
    }


}

export default SignUp;
