import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import logo from '../../assets/logo.svg'

import Dropzone from '../../components/Dropzone'

const UserDashboard = () => {

    useEffect(() => {
        
    }, [])

    return (
        <div id="page-create-point">
            <div className="content">
                <header>
                    <img src={logo} alt="Pernofitness" />
                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para home
                    </Link>
                </header>
                <main>
                    <h1>Dashboar do Usuário</h1>
                    <form>
                        <h1>Cadastro do ponto de coleta</h1>
                        <Dropzone />
                        <fieldset>
                            <legend>
                                <h2>Dados</h2>
                            </legend>
                            <div className="field">
                                <label htmlFor="name">Nome da entidade</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" name="email" id="email" />
                                </div>
                                <div className="field">
                                    <label htmlFor="whatsapp">WhatsApp</label>
                                    <input type="text" name="whatsapp" id="whatsapp" />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>
                                <h2>Endereço</h2>
                                <span>Selecione o endereço no mapa</span>
                            </legend>
                            <div className="field-group">
                                <div className="field">
                                    <label htmlFor="uf">Estado (UF)</label>
                                    <select name="uf" id="uf">
                                        <option value="0">Selecione uma UF</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="city">Cidade</label>
                                    <select name="city" id="city">
                                        <option value="0">Selecione uma cidade</option>
                                    </select>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>
                                <h2>Ítens de coleta</h2>
                                <span>Selecione um ou mais ítens abaixo</span>
                            </legend>
                            <ul className="items-grid">
                                <li className="selected">
                                    <img src="" alt="Teste" />
                                    <span>Óleo de Cozinha</span>
                                </li>
                                <li>
                                    <img src="" alt="Teste" />
                                    <span>Óleo de Cozinha</span>
                                </li>
                                <li>
                                    <img src="" alt="Teste" />
                                    <span>Óleo de Cozinha</span>
                                </li>
                                <li>
                                    <img src="" alt="Teste" />
                                    <span>Óleo de Cozinha</span>
                                </li>
                                <li>
                                    <img src="" alt="Teste" />
                                    <span>Óleo de Cozinha</span>
                                </li>
                                <li>
                                    <img src="" alt="Teste" />
                                    <span>Óleo de Cozinha</span>
                                </li>
                            </ul>
                        </fieldset>
                        <button type="submit">Cadastrar ponto de coleta</button>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default UserDashboard