import CSS from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={CSS.transaction_history}>
      <thead className={CSS.table_head}>
        <tr className={CSS.table_raw_head}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={CSS.table_raw}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
