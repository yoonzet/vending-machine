import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ddd;
`;

function Item({ items, onClick, choose }) {
  return (
    <div>
      <Ul>
        {items.map((item) => (
          <li key={item.id}>
            <Box onClick={() => onClick(item.id)} />
            <p>{item.name}</p>
            <p>가격: {item.price}원</p>
            <p>재고: {item.stock}개</p>
            <p>구매가능여부: {item.stock > 0 ? "가능" : "품절"}</p>
          </li>
        ))}
      </Ul>
    </div>
  );
}

export default Item;
