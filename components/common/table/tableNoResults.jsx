/**
 * Table No Results
 *
 */

const TableNoResults = ({ msg }) => {
  return (
    <tbody>
      <tr className="w-100 ">
        <td className="text-center" colSpan={6}>
          There are no {msg || "users"} in the database yet.
        </td>
      </tr>
    </tbody>
  );
};

export default TableNoResults;
