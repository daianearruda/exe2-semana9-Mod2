import { useAuth } from '../../contexts/auth';
import { fakeApiSignUp } from '../../contexts/auth'; 
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';

export function CadastroPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const user = await fakeApiSignUp(data);
            signIn({
                id: user.userId,
                username: user.username,
                email: user.email,
                age: '',
            });
            navigate('/home');
        } catch (error) {
            alert(error);
        }
    };

    return (
        <main className={styles.container}>
            <div className={styles.formSignin}>
                <h1 className="h3 pt-2 my-4 fw-normal">Preencha todos os campos para efetuar o cadastro.</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column align-items-center'>
                    <div className="mb-2 w-50">
                        <label htmlFor="username" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="Nome"
                            {...register('firstName', { required: 'Nome é obrigatório' })}
                        />
                        {errors.username && <p className="text-danger">{errors.username.message}</p>}
                    </div>

                    <div className="mb-2 w-50">
                        <label htmlFor="email" className="form-label">Sobrenome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Sobrenome"
                            {...register('lastName', { required: 'Sobrenome é obrigatório' })}
                        />
                        {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    </div>

                    <div className="mb-2 w-50">
                        <label htmlFor="firstName" className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="email"
                            {...register('email', { required: 'Email é obrigatório' })}
                        />
                        {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
                    </div>

                    <div className="mb-2 w-50">
                        <label htmlFor="gender" className="form-label">Gênero</label>
                        <input
                            type="text"
                            className="form-control"
                            id="gender"
                            placeholder="Gênero"
                            {...register('gender', { required: 'Gênero é obrigatório' })}
                        />
                        {errors.gender && <p className="text-danger">{errors.gender.message}</p>}
                    </div>

                    <div className="mb-2 w-50">
                        <label htmlFor="image" className="form-label">Acrescente uma foto</label>
                        <input
                            type="text"
                            className="form-control"
                            id="image"
                            placeholder="URL da foto"
                            {...register('image', { required: 'A URL é obrigatória' })}
                        />
                        {errors.image && <p className="text-danger">{errors.image.message}</p>}
                    </div>

                    <div className="mb-2 w-50">
                        <label htmlFor="password" className="form-label">Crie uma senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="******"
                            {...register('password', { required: 'Senha é obrigatória' })}
                        />
                        {errors.password && <p className="text-danger">{errors.password.message}</p>}
                    </div>

                    <button className="btn btn-primary w-50 py-2 mt-4" type="submit">Cadastrar</button>
                    <p className="mt-5 mb-3 text-body-secondary">lab365 &copy; 2024</p>
                    <p>Já possui cadastro? <Link to="/login">Efetuar login</Link></p>
                </form>
            </div>
        </main>
    );
}
