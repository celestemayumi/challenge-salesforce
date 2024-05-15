import "./styles.css";

function Logged(props: any) {

  return (
    <div className='logged'>
    <div className='options'>
      <h1>
        Bem vindo(a) {props.name}
      </h1>
      <button onClick={props.view}>Visualizar dados da conta</button>
      <button onClick={props.update}>Atualizar dados da conta</button>
      <button onClick={props.delete}>Deletar conta</button>      
      <button onClick={props.deslogged} className="sair">Sair</button>      
    </div></div>
  )
}

export default Logged;