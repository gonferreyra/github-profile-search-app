import { Toaster } from 'react-hot-toast';

import SearchForm from './components/SearchForm';
import ProfileData from './components/ProfileData';

function App() {
  return (
    <>
      <div className='mx-auto max-w-lg px-2 lg:max-w-4xl xl:max-w-5xl'>
        <div className='absolute left-0 top-0 -z-10 h-[210px] w-full bg-hero-image bg-cover bg-center bg-no-repeat' />
        <header>
          <SearchForm />
        </header>
        <main>
          <ProfileData />
        </main>
      </div>
      <Toaster position='top-right' />
    </>
  );
}

export default App;
