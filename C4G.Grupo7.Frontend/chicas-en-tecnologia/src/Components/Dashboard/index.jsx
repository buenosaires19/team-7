import React from 'react';
import './style.css'
import logo from '../logo-big.svg'
import chica from '../Components/Pictures/chica.jpg'
import API from '../API'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            postulantes: [],
        } 

    }

    componentDidMount(){
        API.get("/postulantes").then(post => this.setState({postulantes:post})).catch(console.log("holis"));
    }

    
    renderCard() {
        return (
            <Bar data={data}></Bar>
        )
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