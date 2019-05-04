import React from 'react';
import logo from '../../logo-big.svg'
import './style.css'
import API from '../../API'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bar } from 'react-chartjs-2';

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            interaccionesPorProvincia: {
                'Buenos Aires': {
                    Programadora: 10,
                    DevOps: 20,
                    UnaMas: 14
                },
                'Formosa': {}
            },
            data: {},
            options: {},
            postulantes: [],
            provincia: ''
        }

    }

    componentDidMount() {
        API.get("/postulantes/byVisita").then(post => this.setState({ postulantes: post })).catch()
        this.dataForSelectedProvincia()
    }

    dataForSelectedProvincia(provincia = 'Buenos Aires') {
        const iteracionPorProvincia = this.state.interaccionesPorProvincia[provincia]
        this.setState({
            data: {
                labels: Object.keys(iteracionPorProvincia),
                datasets: [{
                    label: 'Cantidad de interacciones por oficio en la provincia de ' + provincia,
                    data: Object.values(iteracionPorProvincia),
                    backgroundColor: this.backgroundColorsByData(Object.keys(iteracionPorProvincia).length),
                    borderWidth: 1
                },
                ],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            },
            provincia: provincia

        })
    }

    randomColor() {
        var hue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', .6)';
        return hue;
    }

    backgroundColorsByData(s) {
        let arr = [];
        for (let i = 0; i < s; i++) {
            arr.push(this.randomColor());
        }
        return arr;
    }


    provincias() {
        return Object.keys(this.state.interaccionesPorProvincia).map(prov => <option>{prov}</option>);
    }

    renderCard() {
        console.log(this.state.postulantes)
        return (
            <Bar data={this.state.data} options={this.state.options}></Bar>
        )
    }

    renderForm() {
        console.log(this.state.postulantes.filter(item => item.localidad.provincia === this.state.provincia))
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow custom-navbar">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                        <img src={logo} />
                    </a>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">Sign out</a>
                        </li>
                    </ul>
                </nav>
                <div className="container-fluid dash">
                    <div className="container-fluid container-cust">
                        <div className="row chart-custom">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 text-center">
                                {this.renderCard()}
                                <select className="form-control" onChange={(event) => this.dataForSelectedProvincia(event.target.value)}>
                                    {this.provincias()}
                                </select>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid custom-table">
                    <div className="container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Oficio</th>
                                    <th scope="col">Area</th>
                                    <th scope="col">Puntuacion</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.postulantes.map(postulante => (
                                    <tr>
                                        <th scope="row">{postulante.id}</th>
                                        <td>{postulante.nombre}</td>
                                        <td>{postulante.apellido}</td>
                                        <td>{postulante.oficio}</td>
                                        <td>{postulante.areaEspecializacion}</td>
                                        <td>{postulante.visitas}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>












        );
    }
}

export default Dashboard;

