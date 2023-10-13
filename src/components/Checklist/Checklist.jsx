import { useState } from "react";
import { ChecklistContent, ChecklistContainer, ChecklistActions, TaskList, ModalButtons } from "./ChecklistStyles";
import { TextField, MenuItem } from "@mui/material";
import { ModalBar } from "../../utils/Modal";
import '../../assets/fonts.css'


export const Checklist = () => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <ChecklistContainer>
                <h1>CHECKLIST</h1>
                <ChecklistContent>
                    <ChecklistActions>
                        <button onClick={() => setModal(true)}>NOVA TAREFA</button>
                    </ChecklistActions>
                    <TaskList>

                    </TaskList>
                </ChecklistContent>
                {modal &&
                    <ModalBar showModal={modal} setShowModal={setModal} width={600} height={600}>
                        <h2>NOVA TAREFA</h2>
                        <div
                            style={{
                                width: '60%',
                                margin: '100px 0 0 0'
                            }}>
                            <TextField style={{ width: '100%', margin: '0 0 15px 0' }} label='Titulo da Tarefa' variant="standard"></TextField>
                            <TextField select style={{ width: '100%', margin: '0 0 15px 0' }} label='Prioridade' variant="standard">

                            </TextField>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                            }}>
                                <label htmlFor="tipoDias" style={{
                                    fontFamily: "Roboto",
                                    fontSize: '15px',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontWeight: '400'
                                }}>Data de Vencimento</label>
                                <input type="date" style={{
                                    height: '30px',
                                    fontSize: '13px',
                                    border: 'none',
                                    borderBottom: '1px solid grey',
                                    fontFamily: "Roboto",
                                    outline: 'none',
                                    marginBottom: '15px'
                                }} max={'2099-12-31'} min={'2000-01-01'} />
                            </div>
                            <div>
                                <label style={{
                                    fontFamily: "Roboto",
                                    fontSize: '15px',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    fontWeight: '400',
                                    outline: 'none'
                                }} htmlFor="">Descrição</label>
                                <textarea rows={5} style={{fontFamily: "Roboto", fontSize: '15px',  borderBottom: '1px solid grey', outline: 'none', resize: 'none', width: '100%', margin: '0 0 15px 0' }} label='Nome da Tarefa' variant="standard"></textarea>
                            </div>
                        </div>

                        <ModalButtons>
                            <button onClick={() => setModal(false)} style={{background: '#e74c3c'}}>Cancelar</button>
                            <button style={{background: '#27ae60'}}>Salvar</button>
                        </ModalButtons>
                    </ModalBar >
                }
            </ChecklistContainer>
        </>
    )
}