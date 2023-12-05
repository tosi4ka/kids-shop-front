import style from "@/components/TheHeader/SubHeader/style.module.scss";
import React, {useEffect, useState} from "react";
import getProductsByFilters from "@/components/functions/getProductsByFilters";
import {useAppDispatch} from "@/store";
import {addFilter} from "@/features/filtersSlice";
import {useRouter} from "next/navigation";
import {ProductsProps} from "@/types/productsTypes";

interface SearchBarProps {

}

const SearchBar: React.FC<SearchBarProps> = () => {

    const router = useRouter();

    const dispatch = useAppDispatch()

    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    const [inputValue, setInputValue] = useState('');

    const [searchTerm, setSearchTerm] = useState('');

    const [searchResults, setSearchResults] = useState<ProductsProps | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nextValue = event.target.value;
        setInputValue(nextValue);
        // If there's a timer, clear it
        if (timer) {
            clearTimeout(timer);
        }

        // Then start a new timer
        if (nextValue === '') {
            setSearchTerm('')
            setSearchResults(null)
        } else {
            setTimer(setTimeout(() => setSearchTerm(nextValue), 1000));
        }

    };

    useEffect(() => {
        if (searchTerm != '') {
            getProductsByFilters("name=" + searchTerm).then(data => showSearchResults(data))
        }
    }, [searchTerm])

    function showSearchResults(data: any) {
        setSearchResults(data)
    }

    function doSearch(searchString: string) {
        dispatch(addFilter({key: "name", value: searchString}))
        router.push("/catalog")
        setInputValue('')
        setSearchResults(null)
    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            doSearch(searchTerm)
        }
    };

    return <>
        <div className={style.search_input_wrapp}>
            <input
                className={style.search_input}
                type='text'
                placeholder='я шукаю'
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
            {/* Display fetched data as dropdown under the input */}

            {searchResults && searchResults.count > 0 && (
                <div className={style.search_result}>
                    {searchResults.results.map((option) => (
                        <div key={option.id} className={style.search_result_item}
                             onClick={() => doSearch(option.name)}>{option.name}</div>
                        // <option key={index} value={option.id}>{option.name}</option>
                    ))}
                </div>
            )}
            {searchResults && searchResults.count === 0 && (
                <div className={style.search_result}>
                    <div className={style.search_result_item}>Нема результатів</div>
                </div>
            )}
        </div>
    </>
}

export default SearchBar