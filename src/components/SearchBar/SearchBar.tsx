import React from 'react';
import { resetPage, setSearchOptions } from '../../redux/advertisementsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import style from './SearchBar.module.scss';

export function SearchBar() {
  const { resultsPerPage } = useAppSelector((state) => state.advertisements);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = event.target;
    dispatch(setSearchOptions({ name, value }));
    dispatch(resetPage());
  };

  return (
    <div className={style.searchOptions}>
      <label className={style.searchLabel}>
        Количество объявлений
        <select
          className={`input ${style.searchSelect}`}
          name="resultsPerPage"
          value={resultsPerPage}
          onChange={handleChange}
        >
          <option value="10" selected>
            10
          </option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </label>
      <input
        type="text"
        className={`input ${style.searchInput}`}
        name="searchValue"
        onChange={handleChange}
        placeholder="Поиск по названию"
      />
    </div>
  );
}

export default SearchBar;
