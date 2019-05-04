import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class Menu extends React.Component {



    render() {
        return(
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="localhost:3000/">Inicio</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                </button>   
            </nav>
        );
    }
}

export default Menu