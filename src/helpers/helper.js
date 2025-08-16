const filterBySearch = (search, products) => {
  if (!search) return products;
  else {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().trimStart().includes(search)
    );
    return filteredProducts;
  }
};

const filterByCategory = (category, products) => {
  if (!category || category === "all") return products;
  else {
    const filteredProducts = products.filter(
      (product) => category === product.category.toLowerCase()
    );
    return filteredProducts;
  }
};

const setQueryObject = (query, newQuery) => {
  if (newQuery.search === "") {
    const { search, ...res } = query;
    return res;
  }
  if (newQuery.category === "all") {
    const { category, ...res } = query;
    return res;
  }
  return { ...query, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;

  return query;
};
const sumProducts = (data) => {
  const itemsCounter = data.reduce((acc, cur) => acc + cur.count, 0);
  const total = data.reduce((acc, cur) => acc + cur.count * cur.price, 0).toFixed(2);
  return { itemsCounter, total };
};
 const getProductById=(id,data)=>{
   const result= data.find(item=>item.id===+id)
   return {...result}
  }
const addLocalStorage=(cart)=>{
  localStorage.setItem("cart",JSON.stringify(cart))
}
export {
  filterBySearch,
  filterByCategory,
  setQueryObject,
  getInitialQuery,
  sumProducts,
  getProductById,
  addLocalStorage
};
