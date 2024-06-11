function App() {
  return (
    <div className='mx-auto max-w-lg lg:max-w-4xl xl:max-w-5xl'>
      <div className='absolute left-0 top-0 -z-10 h-[210px] w-full bg-hero-image bg-cover bg-center bg-no-repeat' />
      <header>
        {/*  llevar el form a un componente aparte */}
        <form className='relative max-w-[450px] pt-8 sm:mx-auto'>
          <button className='absolute left-4 top-3 pt-8'>
            <i>
              <img src='src/assets/Search.svg' alt='search-icon' />
            </i>
          </button>
          <input
            className='h-[50px] w-full rounded-lg bg-dark2 pl-14 text-sm font-semibold placeholder-mediumGray outline-none focus:shadow-custom'
            type='text'
            placeholder='username'
            spellCheck={false}
            required
          />
        </form>
      </header>
      <main>
        <section className='relative ml-36 mt-32 lg:ml-0'>
          <div className='absolute -left-36 -top-6 w-[100px] rounded-2xl lg:left-0'>
            <img
              className='w-full rounded-2xl border-8 border-dark2'
              src='src/assets/9919.png'
              alt=''
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
              <p className='p-2 text-gray'>27839</p>
            </div>
            <div className='flex w-fit rounded-xl bg-dark1 px-3 py-2 text-sm font-bold text-mediumGray'>
              <p className='p-2'>Following</p>
              <div className='w-[1px] bg-mediumGray' />
              <p className='p-2 text-gray'>0</p>
            </div>
            <div className='flex w-fit rounded-xl bg-dark1 px-3 py-2 text-sm font-bold text-mediumGray'>
              <p className='p-2'>Location</p>
              <div className='w-[1px] bg-mediumGray' />
              <p className='p-2 text-gray'>San Francisco, CA</p>
            </div>
          </div>
        </section>

        <section className='text-gray'>
          <h1 className='text-[2rem]'>Name</h1>
          <h2 className='text-[#6a7993]'>Bio</h2>

          <div className='my-6 grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <div className='bg-box-gradient rounded-xl p-4'>
              <h3 className='text-title-text'>repo name</h3>
              <p className='text-body-text pb-3 pt-1 text-[#6a7993]'>
                repo description
              </p>
              <div className='flex items-center gap-4'>
                <p className='text-body-text flex gap-2'>
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
            </div>
            <div className='bg-box-gradient rounded-xl p-4'>
              <h3 className='text-title-text'>repo name</h3>
              <p className='text-body-text pb-3 pt-1 text-[#6a7993]'>
                repo description
              </p>
              <div className='flex items-center gap-4'>
                <p className='text-body-text flex gap-2'>
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
            </div>
            <div className='bg-box-gradient rounded-xl p-4'>
              <h3 className='text-title-text'>repo name</h3>
              <p className='text-body-text pb-3 pt-1 text-[#6a7993]'>
                repo description
              </p>
              <div className='flex items-center gap-4'>
                <p className='text-body-text flex gap-2'>
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
            </div>
          </div>

          <button>View all repositories</button>
        </section>
      </main>
    </div>
  );
}

export default App;
