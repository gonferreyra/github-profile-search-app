import { BounceLoader } from 'react-spinners';
import { useGithubProfileContext } from '../lib/hooks';
import RepoItem from './RepoItem';

export default function ProfileData() {
  const {
    isErrorQuery,
    isErrorRepos,
    isLoadingQuery,
    isLoadingRepos,
    profileData,
    numberOfReposToShow,
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
        <div className='relative mx-auto mt-48 w-[60px] text-center'>
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
              <RepoItem />
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
