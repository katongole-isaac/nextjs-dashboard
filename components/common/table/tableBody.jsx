/**
 * Table Body Component
 *
 */

import _ from "lodash";

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {columns.map((column, idx) => {
            if (column.path === "bank.cardNumber")
              return <td key={column.path}> {item.bank["cardNumber"]} </td>;

            if (!column.content)
              return <td key={column.path}>{item[column.path]}</td>;

            return <td key={idx}>{column.content(item)}</td>;
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
