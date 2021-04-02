import React from 'react'
import { Button, Dropdown } from 'react-bootstrap'
import UseStyles from '../Styles/Estilos'
import '../Styles/Estilos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import Requisicao from './Requisicao'

function Menu_Superior() {
    function handleClick(e){
        
    }

    return (
        <div>
            <div className='row d-flex justfy-content-center'>
                <div className='col-11'>
                    <form>
                        <TextField
                            id="outlined-secondary"
                            label="Pesquisar..."
                            variant="outlined"
                            color="secondary"
                            style={{ width: '100%' }}
                            size='small'
                        />
                    </form>
                </div>
                <div className='col-1 pr-0 mr-0'>
                    <a href="#"><SearchIcon></SearchIcon></a>
                </div>
            </div>
            <div className='row d-flex justfy-content-center'>
                <div className='col-4 pt-3 d-flex justify-content-center' >
                    <Button variant="outline-primary">Atribuir</Button> 
                </div>
                <div className='col-4 pt-3 d-flex justify-content-center' >
                    <Button variant="outline-primary" onClick={handleClick}>Arquivar</Button>
                </div>
                <div className='col-4 pt-3 d-flex justify-content-center' >
                    <Button variant="outline-primary">Agendar</Button>
                </div>
            </div>
        </div>
    )
}

function Main(props) {
    return (
        <div>
            <Menu_Superior></Menu_Superior>
        </div>
    )
}

export default Main