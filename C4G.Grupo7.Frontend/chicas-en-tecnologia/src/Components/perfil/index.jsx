import React, { Component } from 'react'
import { Player } from 'video-react'
import logo from '../../logo-big.svg'
import photo from '../Pictures/chica.jpg'
import API from '../../API'
import '../../../node_modules/video-react/dist/video-react.css'
import './perfil.css'



 

export default class perfil extends Component {

    constructor() {
        super();
        this.state = {
        id: null,
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        oficio: "",
        descripcion: "",
        localidad: {
            pais: "",
            provincia: "",
            localidad: "",  
        },
        contenido: "",
        foto: "",
        areaEspecializacion: "",
        visitas: 0,
        }
    }

    componentDidMount() {
        API.get(`/postulante/${this.props.match.params.id}/ver`).then(postulante => 
            this.setState({id: postulante.id,
                            nombre: postulante.nombre,
                            apellido: postulante.apellido,
                            fechaNacimiento: postulante.fechaNacimiento,
                            oficio: postulante.oficio,
                            descripcion: postulante.descripcion,
                            localidad: postulante.localidad,
                            contenido: postulante.contenido,
                            areaEspecializacion: postulante.areaEspecializacion,
                            foto: postulante.foto,
                            visitas: postulante.visitas,
            })).catch();
    }
    render() {
        return (
            <div>
                <div id="profile" className="container-fluid text-center">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <img src={photo} alt="profile photo" className="rounded-circle" />
                            <h2>{this.state.nombre}</h2>
                            <ul>
                                <li>{this.state.areaEspecializacion}</li>
                                <li>{this.state.localidad.pais}</li>
                            </ul>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>

                <div className="container">
                    <h3> A brief story about me</h3>

                    <p id="description">{this.state.descripcion}</p>

                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <Player
                            id="video"
                            playsInline
                            poster={logo}
                            src={this.state.contenido}
                            />
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        )
    }
}
