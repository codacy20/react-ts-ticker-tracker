import './Price.scss';

function Price() {
  return (
    <div className="price-container">
      <div className="wrapper">
        <span>Open</span>
        <span>$0.0</span>
      </div>
      <div className="devide"></div>
      <div className="wrapper">
        <span>Current</span>
        <span>$0.0</span>
      </div>
    </div>
  );
}

export default Price;
