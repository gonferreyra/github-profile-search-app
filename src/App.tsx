import { useState } from 'react';

import { useDebounce, useSearchQuery, useSearchReposQuery } from './lib/hooks';
import { Toaster } from 'react-hot-toast';

// flujo busqueda. Usersearch state, va a un debounce, del debounce va al fetch con react-query (custom hook) - funcion fetch va por fuera del hook, y la llamamos del hook. Devolvemos valores.
// A tener en cuenta tambien que hay que hacer paginacion, mostrar 4 resultados cuando arranca, con opcion de mostrar mas.

function App() {
  // state
  const [userSearch, setUserSearch] = useState('GitHub');
  // const [profileData, setProfileData] = useState<ApiUserResponse | null>(null);
  // const [reposData, setReposData] = useState([]);
  const { debouncedValue } = useDebounce(userSearch);

  const {
    data: profileData,
    isLoading: isLoadingQuery,
    isError: isErrorQuery,
  } = useSearchQuery(debouncedValue);
  const {
    data: reposData,
    isLoading: isLoadingRepos,
    isError: isErrorRepos,
  } = useSearchReposQuery(debouncedValue);

  return (
    <>
      <div className='mx-auto max-w-lg lg:max-w-4xl xl:max-w-5xl'>
        <div className='absolute left-0 top-0 -z-10 h-[210px] w-full bg-hero-image bg-cover bg-center bg-no-repeat' />
        <header>
          {/*  llevar el form a un componente aparte */}
          <form
            // onSubmit={onSubmit}
            className='relative mx-auto max-w-[450px] pt-8'
          >
            <button className='absolute left-4 top-3 pt-8'>
              <i>
                <img src='src/assets/Search.svg' alt='search-icon' />
              </i>
            </button>
            <input
              className='h-[50px] w-full rounded-lg bg-dark2 pl-14 text-sm font-semibold text-mediumGray placeholder-mediumGray outline-none focus:shadow-custom'
              type='text'
              placeholder='username'
              spellCheck={false}
              required
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
            />
          </form>
        </header>
        <main>
          {isErrorQuery || isErrorRepos ? (
            <div className='relative mt-32 text-center lg:ml-0'>
              <p>Error</p>
            </div>
          ) : isLoadingQuery || isLoadingRepos ? (
            <p>Loading...</p>
          ) : (
            <>
              <section className='relative ml-36 mt-32 lg:ml-0'>
                <div className='absolute -left-36 -top-6 w-[100px] rounded-2xl lg:left-0'>
                  <img
                    className='w-full rounded-2xl border-8 border-dark2'
                    src={profileData?.avatar_url}
                    alt='profile-picture'
                  />
                </div>
                <div className='flex flex-col gap-4 pb-4 pt-4 lg:flex-row lg:justify-center'>
                  {/* <div className='absolute -left-36 -top-6 w-[90px] rounded-2xl lg:static'>
              <img
                className='h-auto w-full rounded-2xl border-8 border-dark2'
                src='src/assets/9919.png'
                alt=''
              />
            </div> */}
                  <div className='flex w-fit flex-row rounded-xl bg-dark1 px-3 py-2 text-sm font-bold text-mediumGray'>
                    <p className='p-2'>Followers</p>
                    <div className='w-[1px] bg-mediumGray' />
                    <p className='p-2 text-gray'>{profileData?.followers}</p>
                  </div>
                  <div className='flex w-fit rounded-xl bg-dark1 px-3 py-2 text-sm font-bold text-mediumGray'>
                    <p className='p-2'>Following</p>
                    <div className='w-[1px] bg-mediumGray' />
                    <p className='p-2 text-gray'>{profileData?.following}</p>
                  </div>
                  <div className='flex w-fit rounded-xl bg-dark1 px-3 py-2 text-sm font-bold text-mediumGray'>
                    <p className='p-2'>Location</p>
                    <div className='w-[1px] bg-mediumGray' />
                    <p className='p-2 text-gray'>{profileData?.location}</p>
                  </div>
                </div>
              </section>

              <section className='text-gray'>
                <h1 className='text-[2rem]'>{profileData?.name}</h1>
                <h2 className='text-[#6a7993]'>{profileData?.bio}</h2>

                <div className='my-6 grid grid-cols-1 gap-6 lg:grid-cols-2'>
                  {/* <div className='rounded-xl bg-box-gradient p-4'>
                    <h3 className='text-title-text'>repo name</h3>
                    <p className='pb-3 pt-1 text-body-text text-[#6a7993]'>
                      repo description
                    </p>
                    <div className='flex items-center gap-4'>
                      <p className='flex gap-2 text-body-text'>
                        <img src='src/assets/Chield_alt.svg' alt='chield-img' />
                        12314
                      </p>
                      <p className='flex gap-2'>
                        <img src='src/assets/Nesting.svg' alt='nesting-img' />7
                      </p>
                      <p className='flex gap-2'>
                        <img src='src/assets/Star.svg' alt='star-img' />
                        5050
                      </p>
                      <p className='text-small-text'>updated 4 days ago</p>
                    </div>
                  </div> */}

                  {reposData?.slice(0, 4).map((repo) => (
                    <div
                      key={repo.id}
                      className='rounded-xl bg-box-gradient p-4'
                    >
                      <h3 className='text-title-text'>{repo.name}</h3>
                      <p className='pb-3 pt-1 text-body-text text-[#6a7993]'>
                        {repo.description}
                      </p>
                      <div className='flex items-center gap-4'>
                        <p className='flex gap-2 text-body-text'>
                          <img
                            src='src/assets/Chield_alt.svg'
                            alt='chield-img'
                          />
                          {repo.license?.name || 'No license'}
                        </p>
                        <p className='flex gap-2'>
                          <img src='src/assets/Nesting.svg' alt='nesting-img' />
                          {repo.forks}
                        </p>
                        <p className='flex gap-2'>
                          <img src='src/assets/Star.svg' alt='star-img' />
                          {repo.watchers}
                        </p>
                        {/* hacer funcion que devuelva hace cuanto se actualizo */}
                        <p className='text-small-text'>updated 4 days ago</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='mb-12 mt-8 text-center'>
                  <button>View all repositories</button>
                </div>
              </section>
            </>
          )}
        </main>
      </div>
      <Toaster position='top-right' />
    </>
  );
}

export default App;
