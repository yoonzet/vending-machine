import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  margin-top: 5%;
`;
const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 200px;
  cursor: pointer;
  &:hover {
    transform: scale(102%);
  }
`;

function Item({ productsList, onClick, priceToString }) {
  return (
    <div>
      <Ul>
        {productsList.map((item) => (
          <Li key={item.id}>
            <Img onClick={() => onClick(item.id)} src={item.img} />
            {/* <p>{item.name}</p> */}
            <p>{priceToString(item.price)}원</p>
            <p>재고: {item.stock}개</p>
            <p style={{ color: "red" }}>{item.stock > 0 ? "" : "품절"}</p>
          </Li>
        ))}
      </Ul>
    </div>
  );
}

export default Item;
