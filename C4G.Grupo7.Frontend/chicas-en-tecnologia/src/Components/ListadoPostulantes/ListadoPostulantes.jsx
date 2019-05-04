import React from 'react';
import API from '../../API';
import './styleListado.css'
import chica from '../Pictures/chica.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

class ListadoPostulantes extends React.Component {

    constructor() {
        super();
        this.state = {
            postulantes: [1, 2,3,4],
        } 

    }

    componentDidMount(){
        API.get("/postulantes").then(postulantes1 => this.setState({postulantes: postulantes1})).catch(console.log());
    }


    redirect(id) {
       this.props.history.push(`perfil/${id}`);
    }


    

    renderPostulantes() {
       return this.state.postulantes.map(postulante =>  <div class="card mb-3 card-custom">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src={chica} class="rounded-circle" alt="..."/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
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
                <div className="container backScroll">   
                    {this.renderPostulantes()}    
                </div>
            </body>
        );
    }



}

export default ListadoPostulantes;