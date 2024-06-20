import { useGithubProfileContext } from '../lib/hooks';

export default function RepoItem() {
  const { sortedRepos, numberOfReposToShow, calculateDaysSinceUpdate } =
    useGithubProfileContext();

  return (
    <>
      {sortedRepos?.slice(0, numberOfReposToShow).map((repo) => {
        const daysSinceUpdate = calculateDaysSinceUpdate(repo.updated_at);
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
                <img src={'/Chield_alt.svg'} alt='chield-img' />
                {repo.license?.name || 'No license'}
              </p>
              <p className='flex gap-2'>
                <img src={'/Nesting.svg'} alt='nesting-img' />
                {repo.forks}
              </p>
              <p className='flex gap-2'>
                <img src={'/Star.svg'} alt='star-img' />
                {repo.watchers}
              </p>
              <p className='text-small-text'>
                updated {daysSinceUpdate} days ago
              </p>
            </div>
          </a>
        );
      })}
    </>
  );
}
