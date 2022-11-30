const requestDrinkssAPI = async (filterOption, valueSearch) => {
  if (filterOption === 'ingredient-search') {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${valueSearch}`);
      const results = await response.json();
      return results;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  if (filterOption === 'name-search') {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${valueSearch}`);
      const results = await response.json();
      return results;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  if (filterOption === 'first-letter-search') {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${valueSearch}`);
      const results = await response.json();
      return results;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

export default requestDrinkssAPI;
