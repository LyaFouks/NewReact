import "./CostItem.css";

function CostItem() {
  return (
    <div className="cost-item">
      <div>Март 2021 12</div>
      <div className="cost-item__description">
        <h2>Телевизор</h2>
        <div className="cost-item__price">400$</div>
      </div>
    </div>
  );
}

export default CostItem;
