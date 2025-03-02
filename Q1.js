function processProductData(electronicsProducts ,kitchenProducts){

    const merge = [...electronicsProducts , ...kitchenProducts]
     
    const extract = merge.map(({id, name, price, category, stock}) => ({  
    
          id,
          name,
          price,
          category ,
          stock,
}))

const  calculateSummary  = merge.reduce(
                                      (acc, {price}) => {
                                      acc.totalPrice += price
                                      acc.count += 1
                                      acc. averagePrice= acc.totalPrice/ acc.count
                                      return acc
                                      },
                                      {totalPrice : 0, count : 0, averagePrice : 0}
                                    )
                                    return {extract , calculateSummary}
                                  }
  const electronicsProducts = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics", stock: 15 },
  { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", stock: 20 }
]

const kitchenProducts = [
  { id: 3, name: "Blender", price: 49.99, category: "Kitchen", stock: 10 },
  { id: 4, name: "Coffee Maker", price: 89.99, category: "Kitchen", stock: 5 }
]

console.log(processProductData(electronicsProducts,kitchenProducts))
