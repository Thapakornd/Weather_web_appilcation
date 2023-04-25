import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate";
import { URL , geoApiOption } from "../../API";

const Search = ({onSearchChange}) =>{
    const [search, setSearch] = useState(null);

    const loadOptions = async(InputValue) => {
        try {
            const response = await fetch(`${URL}?minPopulation=1000000&namePrefix=${InputValue}`, geoApiOption);
            const result = await response.json();
            console.log(result)
            return{
                options: result.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <div>
            <h1>Search City</h1>
            <AsyncPaginate 
                placeholder="Search for city"
                debounceTimeout={600}
                value={search}
                loadOptions={loadOptions}
                onChange={handleOnChange}
            />
        </div>
    )
}

export default Search;