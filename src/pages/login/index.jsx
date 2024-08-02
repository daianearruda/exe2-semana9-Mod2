import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import photo from '../../assets/user.png';

const LoginPage = () => {
    const { signIn } = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, formState } = useForm()
    const { errors, isSubmitting } = formState

    async function onSubmit(dados) {
        
        try {
            await signIn(dados)
            const age = parseInt(dados.age, 10);
            if(age < 18){
                navigate('/')
                return;
            }
            navigate('/home');
        } catch (error) {
            alert(error)
        }

    }

    return (
        <div className={styles.background}>
            <img src={photo} alt="Logo" />
            <div className={styles.cardLogin}>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
                    <input type="username" placeholder="Nome"
                        className='border-0 rounded px-2'
                        {...register('username', {
                            required: {
                                value: true,
                                message: "Esse campo é obrigatório"
                            }
                        })}
                    />
                    {errors.username && <span className='text-danger text-sm'>{errors.username.message}</span>}

                    <input type="email" placeholder="Email"
                        className='border-0 mt-4 rounded px-2'
                        {...register('email', {
                            required: {
                                value: true,
                                message: "Esse campo é obrigatório"
                            }
                        })}
                    />
                    {errors.email && <span className='text-danger text-sm'>{errors.email.message}</span>}
                    
                    <input type="age" placeholder="Idade"
                        className='border-0 mt-4 rounded px-2'
                        {...register('age', {
                            required: {
                                value: true,
                                message: "Esse campo é obrigatório"
                            }
                        })}
                    />
                    {errors.age && <span className='text-danger text-sm'>{errors.age.message}</span>}

                    <div className='d-flex flex-column justify-content-between align-items-center'>
                        <button className='mt-4 border-0 rounded px-4 py-2 fw-bold'
                            type='submit'
                            disabled={isSubmitting}>{isSubmitting ? 'Carregando...' : 'Entrar'}</button>
                        <Link className='my-4' to={'/cadastro'}> Criar conta</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
