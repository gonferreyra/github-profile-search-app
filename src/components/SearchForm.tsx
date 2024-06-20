import { useUserSearchContext } from '../lib/hooks';

export default function SearchForm() {
  const { userSearch, handleUserSearch } = useUserSearchContext();

  return (
    <form className='relative mx-auto max-w-[450px] pt-8'>
      <button type='button' className='absolute left-4 top-3 pt-8'>
        <i>
          <img src={'/Search.svg'} alt='search-icon' />
        </i>
      </button>
      <input
        className='h-[50px] w-full rounded-lg bg-dark2 pl-14 text-sm font-semibold text-mediumGray placeholder-mediumGray outline-none focus:shadow-custom'
        type='text'
        placeholder='username'
        spellCheck={false}
        required
        defaultValue={userSearch}
        onChange={(e) => handleUserSearch(e.target.value)}
      />
    </form>
  );
}
