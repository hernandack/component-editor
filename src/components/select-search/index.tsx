import { FC } from "react";
import { useAtom } from "jotai";
import { searchKeywordAtom } from "../../modules/select-dropdown/state";

export const SelectSearch: FC = () => {
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom); // used for searching and highlighting option item

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div className="select-search flex items-center py-2 px-4 border-b border-gray-300 gap-4" data-testid="select-search">
      <span className="select-search__icon w-6 h-6 opacity-50">
        <svg className="w-full object-contain" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="select-search-icon">
          <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </span>
      <input
        type="text"
        className="select-search__keywords w-full outline-0 border-0"
        value={searchKeyword}
        onChange={handleSearchChange}
        data-testid="select-search-keyword"
      />
    </div>
  );
};

export default SelectSearch;
