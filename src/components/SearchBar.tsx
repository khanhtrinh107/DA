"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SearchBar = () => {

    const router = useRouter();
    const [keyword, setKeyword] = useState<string>('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(keyword){
            router.push(`/list?name=${keyword}`);
        }
    }
    
    return (
        <form className='flex ic justify-between gap-4 bg-gray-100 px-4 py-2 rounded-md flex-1'
            onSubmit={handleSearch}
        >
            <input type='text' value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder='Search' className='flex-1 bg-transparent outline-none' />
            <button className='cursor-pointer'>
                <Image src={'/search.png'} alt='search-icon' width={16} height={16}/>
            </button>
        </form>
    )
}

export default SearchBar;