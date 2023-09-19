import PropTypes from 'prop-types'

const newMessage = {
    message: 'Hola mundo pedorro!',
    numero: 1000
}

const getMessage = () => {
    return newMessage.message;
}

export const Firstapp = ({
  title,
  subTitle = 'La tierra explota',
  nombre
}) => {
  console.log(title);
  
  return (
    <>
    <h1>{getMessage()}</h1>
        {/* <code>{ JSON.stringify(newMessage) }</code> */}
        <p>{title}</p>
        <p>{subTitle + 1}</p>
        <p>{nombre}</p>
    </>
  )
}

Firstapp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

Firstapp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  nombre: 'Juan Lara'
}
