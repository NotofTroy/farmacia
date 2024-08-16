import { useNavigate, Link } from 'react-router-dom'

const Products = () => {
    let navigate = useNavigate()
    return (
        <div className="flex flex-col justify-evenly">
            <h1 className="text-5xl font-bold">Produtos</h1>
            <p>Ops! Página sob construção.</p>
            <button type='submit'
                onClick={() => { navigate('/home') }}
                className='rounded bg-sky-400 text-white py-2 px-4'>
                Voltar à página inicial
            </button>
        </div>
    )
}

export default Products;