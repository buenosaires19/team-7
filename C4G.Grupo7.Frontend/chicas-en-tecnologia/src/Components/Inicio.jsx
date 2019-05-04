import React from 'react';
import './style.css'
import logo from '../logo-big.svg'
import chica from '../Components/Pictures/chica.jpg'
import API from '../API'
import 'bootstrap/dist/css/bootstrap.min.css';


class inicio extends React.Component {

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
        API.get("/postulante/masvisitado").then(users => this.setState({ usuarios: users })).catch(console.log("Fail"));
    }


    goPostulante() {
        this.props.history.push('/postulante');
    }

    goListado() {
        this.props.history.push(`/postulados`);
    }
    /*
    deleteUser() {
        API.delete(`/user/${this.state.usuarioSeleccionado.id}/delete`)
        .then(console.log(this.state)).catch(console.log("No pillo"))
    }
    */

    renderCard() {
        return (
            // <div className="container borderShadow">
            //     <div className='row'>
            //         <div className='col-md-6'>
            //         <img class="imgRedondeada" src={chica} alt="Test"/>
            //         </div>
            //         <div className="col-md-6 padding6">
            //             <h5 class="card-title">Alejandra Rios</h5>
            //             <p class="card-text">"La vida es una y hay que vivirla. La biotecnologia me cambio la vida."</p>
            //             <p class="card-text">Bioquimica reconocida mundialmente</p>
            //         </div>
            //     </div>
            // </div>
            <div class="card mb-3 card-custom">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={chica} class="rounded-circle" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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