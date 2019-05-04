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
            postulantesFiltrados:[],
            provincia:'',
            oficios:'',
        } 

    }

    componentDidMount(){
        
     
        API.get("/postulantes/").then(postulantes1 => this.setState({postulantes: postulantes1,postulantesFiltrados:postulantes1})).catch(console.log());
    }


    redirect(id) {
       this.props.history.push(`perfil/${id}`);
    }


    provincias() {
        const pronvincias = ["Buenos Aires", "Rio Negro", "Chubut", "Santa Fe", "Tierra del Fuego", "Mendoza", "Cordoba", "Formosa", "Misiones", "Corrientes", "Entre Rios", "La Pampa", "San Juan", "Catamarca", "Tucuman", "Santa Cruz"]
        return pronvincias.map(prov => <option>{prov}</option>);
    }
    

    renderPostulantes() {
       return this.state.postulantesFiltrados.map(postulante =>  <div class="card mb-3 card-custom">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src={chica} class="rounded-circle center" alt="..."/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{postulante.nombre} {postulante.apellido}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>                    
                    <div>
                        <button class="btn btn-lg btn-primary" onClick={() => this.redirect(postulante.id)} >Ver</button>  
                    </div>
                </div>
            </div>
        </div>
    </div>)
    }

    irInicio() {
        this.props.history.push("/");
    }

    setProvincia(elem){
        console.log(elem.target.value);
        
        this.setState({
            provincia: elem.target.value
        });

        const x =elem.target.value;
        const filtrados =  this.state.postulantes.filter(p => p.localidad.provincia === x);

        console.log(filtrados);
        
        
        this.setState({postulantesFiltrados:filtrados})    
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


        return (
            <main className="custom-algo">
                {this.renderMenu()}
                <div className="container-fluid">
                    <h1>Postuladas</h1>
                    <div/><br/>
                    <select class="form-control col-sm-4" id="selectProvinicias"  onChange={event => this.setProvincia(event)}>{this.provincias()}</select>
                    <div className="container backScroll full-screen">   
                        {this.renderPostulantes()}    
                    </div>
                </div>
            </main>
        );
    }



}

export default ListadoPostulantes;