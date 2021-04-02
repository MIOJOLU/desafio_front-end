import React, { useState, useEffect } from 'react'
import { Button, Dropdown, Card } from 'react-bootstrap'
import UseStyles from '../Styles/Estilos'
import '../Styles/Estilos.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, List} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Main from './Main'
import ReactDOM from 'react-dom'
import Requisicao from './Requisicao'

function Perfil() {
    return (

        <div className="col-12 d-flex justify-content-center">
            <div className="row justify-content-center">
                <Dropdown>
                    <Dropdown.Toggle variant="ligth" id="dropdown-basic">
                        <Avatar style={{ height: '70px', width: '70px' }}> U</Avatar>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" className='p'>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <div className="col-12">
                    <div className="row justify-content-center ">
                        <h6>Nome do Usuário</h6>
                    </div>
                    <div className="col-12">
                        <div className="row justify-content-center ">
                            <Button variant="primary" size="sm">
                                Novo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


function NavBar(props) {
    const classes = UseStyles()
    const info = props.data


    const [cardID, setCardID] = useState(11)

    function click(e) {
        setCardID(e.target.id)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-2'>
                    <div className="row pt-2">
                        <div className=" col-12">
                            <Perfil></Perfil>
                        </div>
                    </div>

                    <div className="row pt-2">
                        <div className=" col-12">
                            {
                                info.map(item => (
                                    <Accordion>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                                            <h6>{item.name}</h6>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <List component="nav" aria-label="mail">
                                                {item.subMenus.map(menus => (
                                                    <div className="col-12">
                                                        <div className="row pt-0">
                                                            <button id={menus.id} onClick={click}><span id={menus.id} className="badge badge-light menu">{menus.id}</span>{menus.name}</button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </List>


                                        </AccordionDetails>
                                    </Accordion>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='col-10 pt-2 '>
                    <div className="row pt-2">
                        <div className=" col-12">
                            <Main></Main>
                        </div>
                    </div>

                    <div className="row pt-2">
                        <div className=" col-12">
                            <div id="card ">
                                <Requisicao id={cardID} key={cardID}></Requisicao>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default NavBar