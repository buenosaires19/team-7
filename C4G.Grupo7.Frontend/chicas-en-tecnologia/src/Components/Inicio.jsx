import React from 'react';
import './style.css'
import logo from '../logo-big.svg'
import chica from '../Components/Pictures/chica.jpg'
import API from '../API'
import 'bootstrap/dist/css/bootstrap.min.css';


class inicio extends React.Component {

    constructor() {
        super();
        this.state ={
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
        API.get("/postulante/masVisitado").then(postulante => this.setState({id: postulante.id,
            nombre: postulante.nombre,
            apellido: postulante.apellido,
            fechaNacimiento: postulante.fechaNacimiento,
            oficio: postulante.oficio,
            descripcion: postulante.descripcion,
            localidad: postulante.localidad,
            contenido: postulante.contenido,
            areaEspecializacion: postulante.areaEspecializacion,
            foto: postulante.foto,
            visitas: postulante.visitas,})).catch(console.log("Fail"));
    }


    goPostulante() {
        this.props.history.push('/postulante');
    }

    goListado() {
        this.props.history.push(`/postulados`);
    }


    renderCard() {
        return (
            <div class="card mb-3 card-custom">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={chica} class="rounded-circle" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{this.state.nombre} {this.state.apellido}</h5>
                            <p class="card-text">{this.state.descripcion}</p>
                            <p class="card-text"><small class="text-muted">{this.state.oficio}</small></p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    renderButtons() {
        return (
            <div id="full-screen" className="container-fluid">
                <div className="container">



                    <div className="row">
                        <img src={logo} alt="chica en tecnologia" />
                    </div>
                    <div className="row">
                        <div id='fade' className="container text-center">

                            {this.renderCard()}

                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-outline-light" onClick={() => this.goPostulante()}> Postular </button>
                        </div>
                        <div className="col-md-6">
                            <button type="button" class="btn btn-outline-light" onClick={() => this.goListado()}>Listas</button>
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