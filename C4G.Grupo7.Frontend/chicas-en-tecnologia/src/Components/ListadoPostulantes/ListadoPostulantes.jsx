import React from 'react';
import API from '../../API';
import './styleListado.css'
import chica from '../Pictures/chica.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

class ListadoPostulantes extends React.Component {

    constructor() {
        super();
        this.state = {
            postulantes: [],
        } 

    }

    componentDidMount(){
        API.get("/postulantes").then(postulantes1 => this.setState({postulantes: postulantes1})).catch(console.log());
    }


    redirect(id) {
       this.props.history.push(`perfil/${id}`);
    }


    provincias() {
        const pronvincias = ["Buenos Aires", "Rio Negro", "Chubut", "Santa Fe", "Tierra del Fuego", "Mendoza", "Cordoba", "Formosa", "Misiones", "Corrientes", "Entre Rios", "La Pampa", "San Juan", "Catamarca", "Tucuman", "Santa Cruz"]
        return pronvincias.map(prov => <option>{prov}</option>);
    }
    

    renderPostulantes() {
       return this.state.postulantes.map(postulante =>  <div class="card mb-3 card-custom">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src={chica} class="rounded-circle center" alt="..."/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{postulante.nombre} {postulante.apellido}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onClick={() => this.redirect(postulante.id)}><p class="card-text"><small class="text-muted"></small></p></button>
                </div>
            </div>
        </div>
    </div>)
    }

    render() {


        return (
            <body >
                <h1>Postuladas</h1>
                <div/><br/>
                <select class="form-control col-sm-4" id="selectProvinicias"  onChange={event => this.setLocalidad(event)}>{this.provincias()}</select>
                <div className="container backScroll full-screen">   
                    {this.renderPostulantes()}    
                </div>
            </body>
        );
    }



}

export default ListadoPostulantes;