import React, { Component } from 'react'
import { Player } from 'video-react'
import logo from '../../logo-big.svg'
import photo from '../Pictures/chica.jpg'
import API from '../../API'
import '../../../node_modules/video-react/dist/video-react.css'
import './perfil.css'



const user = {nombre: "Pepita Argenta",
apellido: "Cien",
fechaNacimiento: "12/12/1992",
descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam explicabo itaque numquam eius neque delectus minima minus! Accusantium autem accusamus vitae illo! Ducimus optio natus dolores, veniam quod laboriosam minima?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam explicabo itaque numquam eiusneque delectus minima minusAccusantium autem accusamus vitae illo! Ducimus optio natus dolores, veniam quod laboriosam minima?",
localidad: {
    pais: "Argentina",
    provincia: "Buenos Aires",
    localidad: "Parque Patricios",  
},
contenido: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
foto: "",
areaEspecializacion: "Cientifica",}

export default class perfil extends Component {
    render() {
        return (
            <div>
                <div id="profile" className="container-fluid text-center">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <img src={photo} alt="profile photo" className="rounded-circle" />
                            <h2>{user.nombre}</h2>
                            <ul>
                                <li>{user.areaEspecializacion}</li>
                                <li>{user.localidad.pais}</li>
                            </ul>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>

                <div className="container">
                    <h3> A brief story about me</h3>

                    <p id="description">{user.descripcion}</p>

                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <Player
                            id="video"
                            playsInline
                            poster={logo}
                            src={user.contenido}
                            />
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        )
    }
}
