import Colaborador from '../Colaborador'
import './Time.css'

const Time = (colaboradores, coPrimaria, nome, corSecundaria) => {
    const css = { backgroundColor: corSecundaria }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: coPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => <Colaborador corDeFundo={coPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
            : ''
    )
}

export default Time