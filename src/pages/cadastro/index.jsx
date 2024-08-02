import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export function CadastroPage() {
    return (
        <main className={styles.container}>
            <div className={styles.formSignin}>
                <form>
                   
                    <h1 className="h3 mb-3 fw-normal">Preencha todos os campos para efetuar o cadastro.</h1>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nome</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>

                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Idade</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Senha</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">Entrar</button>
                    <p className="mt-5 mb-3 text-body-secondary">lab365 &copy; 2024</p>
                    <p>Já possui cadastro ? <Link to={-1}>Efetuar login</Link></p>
                </form>
            </div>

        </main>
    )
}