import React, {useState} from 'react'
import "../Styles/Estilos.css"
import { CircularProgress, Avatar} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const data = ['#388e3c', '#d32f2f', '#118ab2', '#ff9800', '#e33371'] //cores aleatórias do avatar

class Requisicao extends React.Component {
    constructor(args) {
        super();
        this.state = {
            dados: []
        }

    }

    async componentDidMount() {
        const url = `http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/items/${this.props.id}`
        const resp = await fetch(url)
        const info = await resp.json()
        this.setState({ dados: info })
    } 

    render() {
        if (this.state.dados && this.state.dados.subMenuItems){
            return (
                <div>
                    {this.state.dados.subMenuItems.map(menus => (
                        <div className="col-12" id = {menus.id}>
                            <div className="row pt-2">
                                <div className="col-1">
                                    <div className='avatarPrincipal avatar' style={{ backgroundColor: data[Math.floor(Math.random() * 5)] }}>
                                        <div className='avatarNome'>{menus.owner}</div>
                                    </div>
                                </div>
                                <div className="col-10 Card">
                                    <div className = 'row'>
                                        <div className='col-10'>
                                            <p className="cardTitulo pb-0 mb-0 pt-0 mt-0">{menus.name}</p>
                                        </div>
                                        <div className='col-2'>
                                            <p className="pb-0 mb-0 pt-0 mt-0 hora text-right">Hoje, 11:42</p>
                                        </div>
                                    </div>
                                    <p className="cardAssunto pb-0 mb-0"><MailOutlineIcon fontSize='small' color='disabled'></MailOutlineIcon> {menus.subject}</p>
                                    <div className='row Card'>
                                        <div className='col-4'>
                                            <p style={{ fontWeight: 'lighter' }}><span id={this.props.id} className="badge badge-light">{this.props.id}</span>  Caixa de Entrada</p>
                                        </div>
                                        <div className="col-8">
                                            <div className='row d-flex justify-content-end text-right'><div className='col-12 hoje'>30 min</div></div>
                                            <div className='row d-flex justify-content-end'>
                                                {menus.users.map(users => (
                                                    <div className='avatar' style={{ backgroundColor: data[Math.floor(Math.random() * 5)] }}>
                                                        <div className='avatarNome'>{menus.owner}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                        </div>                                       
                                        
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    ))}
                </div>
            )
        }

        return (
            <div>
                <div className='row' >
                    <div className='col-12 text-center pt-5'>
                        <CircularProgress></CircularProgress>
                    </div>
                </div>
            </div>
        )
    }
}

export default Requisicao