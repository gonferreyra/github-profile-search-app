import { BounceLoader } from 'react-spinners';
import { useGithubProfileContext } from '../lib/hooks';

export default function ProfileData() {
  const {
    isErrorQuery,
    isErrorRepos,
    isLoadingQuery,
    isLoadingRepos,
    profileData,
    reposData,
    numberOfReposToShow,
    calculateDaysSinceUpdate,
    handleNumberOfReposToShow,
  } = useGithubProfileContext();

  return (
    <>
      {isErrorQuery || isErrorRepos ? (
        <div className='relative mx-auto mt-48 w-1/2 text-center lg:ml-0'>
          <p className='text-justify text-gray'>
            Something went wrong. Please try again later or with a diferent
            username.
          </p>
        </div>
      ) : isLoadingQuery || isLoadingRepos ? (
        <div className='relative mx-auto mt-48 w-[60px] text-center lg:ml-0'>
          <BounceLoader color='#fff' />
        </div>
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
              {reposData?.slice(0, numberOfReposToShow).map((repo) => {
                const daysSinceUpdate = calculateDaysSinceUpdate(
                  repo.updated_at,
                );
                return (
                  <a
                    href={repo.html_url}
                    target='_blank'
                    key={repo.id}
                    className='rounded-xl bg-box-gradient p-4'
                  >
                    <h3 className='text-title-text'>{repo.name}</h3>
                    <p className='pb-3 pt-1 text-body-text text-[#6a7993]'>
                      {repo.description}
                    </p>
                    <div className='flex items-center gap-4'>
                      <p className='flex gap-2 text-body-text'>
                        <img src='src/assets/Chield_alt.svg' alt='chield-img' />
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
                      <p className='text-small-text'>
                        updated {daysSinceUpdate} days ago
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className='mb-12 mt-8 text-center'>
              {numberOfReposToShow <= 4 && (
                <button onClick={handleNumberOfReposToShow}>
                  View all repositories
                </button>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
}
