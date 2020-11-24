import React, { Component } from 'react'

import axios from '../../../axios';
import Result from '../../../components/Result/Result';
//import { Route } from 'react-router-dom';

import './Results.css';

export default class Results extends Component {

    state={
        results: []
    }

    componentDidMount() {
        //console.log(this.props);
        axios.get('/resultados/consultaResultados?fecha=12/11/2020')
            .then(response => {
                console.log(response.data);
                const results = response.data; //.slice(0, 14);
                const updatedResults = results.map(result => {
                    return {
                        ...result
                    };
                });
                this.setState({results: updatedResults});
            })
            .catch(error => {
                console.log(error);
                //this.setState({error: true});
            });
    }    

    render() {
        let results = <p style={{textAlign:'center'}}>Something wont wrong!!</p>
        if(!this.state.error) {
            results = this.state.results.map(result => {
                return (
                        <Result
                        key={result.id}
                        lotteryName={result.loteria.nombreLoteria}
                        lotteryDate={result.fechasorteo}
                        lotteryNumber={result.resultado}
                        lotterySerie={result.serieresultado}
                        lotteryTime={result.hora}
                        lotteryDrawNumber={result.numerosorteo}
                            />
                            // clicked={() => this.postSelectedHandler(result.id)}
                    // </Link>
                );
            });
        }
        return (
            <div>
                <div className="Title">Sorteo del dia: 12/11/2020</div>
                <section className="Results">
                    {results}
                </section>
                {/* <Route path={this.props.match.url + '/:id'} exact component={FullPost} /> */}
            </div>
        )
    }
}
