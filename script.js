const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"]

const ventas = [
   [
     1,
     new Date(2019, 1, 4),
     "Grace",
     "Centro",
     ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
   ],
   [
     2,
     new Date(2019, 0, 1),
     "Ada",
     "Centro",
     ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
   ],
   [
     3,
     new Date(2019, 0, 2),
     "Grace",
     "Caballito",
     ["Monitor ASC 543", "Motherboard MZI"],
   ],
   [
     4,
     new Date(2019, 0, 10),
     "Ada",
     "Centro",
     ["Monitor ASC 543", "Motherboard ASUS 1200"],
   ],
   [
     5,
     new Date(2019, 0, 12),
     "Grace",
     "Caballito",
    ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
   ]
 ]

 const precios = [
   ["Monitor GPRS 3000",200] ,
   ["Motherboard ASUS 1500",120 ],
   ["Monitor ASC 543", 250 ],
   ["Motherboard ASUS 1200", 100 ],
   ["Motherboard MZI", 30 ],
   ["HDD Toyiva", 90 ],
   ["HDD Wezter Dishital", 75 ],
   ["RAM Quinston", 110 ],
   ["RAM Quinston Fury", 230 ],
 ]

 // includes
 // devuelve true/false segun la condicion elegida
 const nombreVendedora = (vendedora) => {
  for  (let venta of ventas) {
      if (venta.includes(vendedora)){
        console.log("output con un if para que imprima array", venta)
        console.log("output solo del includes", venta.includes(vendedora))
      }
  }
 }

 const nombreVendedoraConForEach = (vendedora) => {
  ventas.forEach((venta, index) => {
    if (venta.includes(vendedora)){
      console.log("muestro la posicion", index)
      console.log("muestro la venta", venta)
    }
  })
 }

 // filter
 // devuelve true/false tambien es una iteracion
 const sucursales = (sucursal) => {
  ventas.filter(venta => {
    if (venta[3] === sucursal) {
      console.log("venta:", venta)
    }
  })
 }

 // map
 const numeros = [1, 14, 67, 100, 31]
 const sumarDos = (array) => {
   let newArr = []
    array.map(arr => {
      newArr.push(arr + 2)
    })
  return newArr
 }