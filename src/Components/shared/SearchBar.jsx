import React from 'react'

const SearchBar = () => {
    const [search, setSearch] = useState("");
  return (
    <div className='searchbar'>
      <Image
        src='/assets/search-gray.svg'
        alt='search'
        width={24}
        height={24}
        className='object-contain'
      />
      <Input
        id='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={
          "Search Users" 
        }
        className='no-focus searchbar_input'
      />
    </div>
  )
}

export default SearchBar
