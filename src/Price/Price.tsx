import { useItemData } from '../DataProvider';
import { ContextState, Status } from '../Models/ContextState.model';
import './Price.scss';

function Price() {
  const data: ContextState = useItemData();

  const open = <span>${data.value?.open}</span>;
  const current = <span>${data.value?.current}</span>;

  return (
    <div className="price-container">
      <div className="wrapper">
        <span>Open</span>
        {open}
      </div>
      <div className="devide"></div>
      <div className="wrapper">
        <span>Current</span>
        {current}
      </div>
    </div >
  );
}

export default Price;
