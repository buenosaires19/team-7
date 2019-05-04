import React, { Component } from 'react'
import './perfil.css'


const randomColor = () => {
    const colors = ['#ffb700', '#13e6bd', '#137147', '#6300a8', '#ff5a5f']
    let random = colors[Math.floor(Math.random() * colors.length)]

    document.getElementById('profile').setAttribute('background', random)
}


export default class perfil extends Component {
    render() {
        return (
            <div>
                <div id="profile" className="container-fluid text-center">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <img src="https://www.shareicon.net/data/512x512/2016/07/26/801925_user_512x512.png" alt="profile photo" className="rounded-circle" />
                            <h2>Name of the person</h2>
                            <ul>
                                <li>Cientifica</li>
                                <li>Argentina</li>
                            </ul>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>

                <div className="container">
                    <h3> A brief story about me</h3>

                    

                    <p id="description">
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam explicabo itaque numquam eius
                     neque delectus minima minus! Accusantium autem accusamus vitae illo! Ducimus optio natus dolores, veniam quod 
                     laboriosam minima?
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam explicabo itaque numquam eius
                     neque delectus minima minus! Accusantium autem accusamus vitae illo! Ducimus optio natus dolores, veniam quod 
                     laboriosam minima?
                    </p>
                </div>
            </div>
        )
    }
}
