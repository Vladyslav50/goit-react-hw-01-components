import './TransactionHistory.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead className="table-head">
        <tr className="table-raw">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className="table-raw">
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
