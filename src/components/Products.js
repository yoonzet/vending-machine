import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../modules/product";
import Item from "./Item";

function Products() {
  const { data, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <div>loading</div>;
  if (error) return <div>error!</div>;
  if (!data) return null;
  return (
    <div>
      <h1>자판기</h1>
      <Item list={data} />
    </div>
  );
}

export default Products;
