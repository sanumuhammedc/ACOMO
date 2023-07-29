"use client";

import { useState, useEffect } from "react";
import HostelCard from "./HostelCard";

const HostelCardList = ({ data }) => {
  return (
    <div className='mt-16 flex justify-around items-center flex-wrap mb-6'>
      {data.map((hostel) => (
        <HostelCard
          key={hostel._id}
          hostel={hostel}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allHostels, setAllHostels] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchHostels = async () => {
    const response = await fetch("/api/hostel");
    const data = await response.json();

    setAllHostels(data);
  };

  useEffect(() => {
    fetchHostels();
  }, []);

  const filterHostels = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allHostels.filter(
      (item) =>
        regex.test(item.name) ||
        regex.test(item.hostelType) ||
        regex.test(item.roomTypes) ||
        regex.test(item.location) ||
        regex.test(item.description)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterHostels(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for hostels'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <HostelCardList
          data={searchedResults}
        />
      ) : (
        <HostelCardList data={allHostels} />
      )}
    </section>
  );
};

export default Feed;
