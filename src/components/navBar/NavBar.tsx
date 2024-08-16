import { Link } from "react-router-dom"

function Navbar() {

  return (
    <>
      <div className='w-full bg-sky-400 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmacia Generation</Link>
          <div className='flex gap-4'>
            <Link to='/produtos'>Produtos</Link>
            <div className='hover:underline'>Categorias</div>
            <div className='hover:underline'>Cadastrar categoria</div>
            <div className='hover:underline'>Sair</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar