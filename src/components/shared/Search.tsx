'use client';
import React from 'react';
import { CiSearch } from 'react-icons/ci';

function Search() {
  return (
    <div className="w-full py-2 px-3 max-w-[570px] rounded-lg bg-theme-base-1 flex items-center justify-between gap-x-5">
      <input
        className="bg-transparent flex-1 text-white  h-full outline-none"
        placeholder="Search"
      />
      <button className="w-max">
        <CiSearch size={21} />
      </button>
    </div>
  );
}

export default Search;
