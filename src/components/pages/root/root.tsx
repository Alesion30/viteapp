import { Link } from 'react-router-dom'

import { useRoot } from './root.hook'

import logo from '~/assets/logo.svg'
import { Button } from '~/components/common/button/button'
import { PATH } from '~/router/path'

export const Root: React.VFC = () => {
  const { count, addCount } = useRoot()

  return (
    <div className='text-center'>
      <header className='bg-slate-700 min-h-screen flex flex-col align-center justify-center text-3xl text-white'>
        <img src={logo} className='h-72' alt='logo' />
        <p className='text-4xl'>Hello Vite + React!</p>
        <p className='my-5'>
          count is:{' '}
          <Button outlined onClick={addCount}>
            {count}
          </Button>
        </p>
        <p className='my-5'>
          <Link to={PATH.Hoge}>
            <Button className='w-72'>HOGEページに遷移</Button>
          </Link>
        </p>
      </header>
    </div>
  )
}