var products = [
    {id : 7, name : 'Pen', cost : 40, units : 30, category : 'stationary'},
    {id : 2, name : 'Ten', cost : 70, units : 20, category : 'grocery'},
    {id : 9, name : 'Den', cost : 20, units : 40, category : 'stationary'},
    {id : 4, name : 'Len', cost : 60, units : 50, category : 'stationary'},
    {id : 5, name : 'Zen', cost : 50, units : 30, category : 'grocery'}
]

Find the following using the 'filter, map & reduce' functions

1. filter stationary products

2. filter cost products (cost > 50)
    function costlyProductPredicate(product) {
        return product.cost > 50;
    }
    console.table(products.filter(costlyProductPredicate))
    
3. filter affordable products
    function affordableProductPredicate(product) {
        return !costlyProductPredicate(product);
    }
    console.table(products.filter(affordableProductPredicate))

4. find the total product value (sum of cost * units)
    products.reduce(function (result, product) {
        return result + (product.cost * product.units);
    }, 0)
5. create a new array with the product cost applied with 10% discount
    var discountedProducts = products.map(function (product) {
        return {
            id: product.id,
            name: product.name,
            cost: product.cost * 0.9,
            units: product.units,
            category: product.category
        };
    })