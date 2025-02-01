import './App.css'
import { validation } from './validate'
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type formData = yup.InferType<typeof validation>;

function App() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<formData>({
    resolver: yupResolver(validation)
  })

  const onSubmit = (data: formData) => {
  

    console.log(data);
    reset();
    

  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Inscreva-se</h1>
        <div>
          <label htmlFor="email">E-Mail:</label>
          <input
          type="email"
          id="email"
          {...register('email')}
          />
        </div>
        <small style={{ color: 'red' }}>{errors.email?.message}</small>
        
        <div>
          <label htmlFor="password">Senha:</label>
          <input
          type="password"
          id="password"
          {...register('password')}
          />
        </div>
        <small style={{ color: 'red' }}>{errors.password?.message}</small>

        <div>
          <input
          type="checkbox"
          id="terms"
          {...register('agree')}
          />
          <label htmlFor="terms">Concordo com os termos.</label>
        </div>
        <small style={{ color: 'red' }}>{errors.agree?.message}</small>

        <div><button type="submit">ENVIAR</button></div>
      </form>
    </>
  )
}

export default App
