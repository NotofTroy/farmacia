import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { buscar, deletar } from '../../../services/Service'
import Categoria from '../../../models/Categoria'
import { toastAlerta } from '../../../util/toastAlerta';

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            toastAlerta('Erro ao buscar categoria, verifique se ela existe.', 'erro');
        }
    };

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function retornar() {
        navigate("/categorias");
    };

    async function deletarTema() {
        try {
            await deletar(`/categorias/${id}`)
            toastAlerta('Categoria deletada com sucesso!', 'sucesso');

        } catch (error) {
            toastAlerta('Erro ao apagar categoria. Verifique se ela existe.', 'erro');
        }

        retornar();
    };

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar esta categoria?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>{categoria.nome}</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarTema}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria;