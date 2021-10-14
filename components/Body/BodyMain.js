import ItemCard from "./ItemCard";

function BodyMain({ itemsInfo }) {
  console.log(itemsInfo);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {itemsInfo.map((info, i) => (
        <ItemCard
          key={i}
          id={info.id}
          image={info.image[0]}
          tag={info.tag}
          name={info.name}
          category={info.category}
          color={info.color}
          price={info.price}
        />
      ))}
    </div>
  );
}

export default BodyMain;
