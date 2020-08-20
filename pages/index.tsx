import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const HomePage = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((product, index) => {
        return (
          <React.Fragment key={index}>
            <Link href="/product/[id]" as={`/product/${product.id}`}>
              Ver
            </Link>
            <h1>{product.id}</h1>
            <div>{product.name}</div>
            <img src={product.image} alt="imagen" />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default HomePage
