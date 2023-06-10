/**
 * Table Header component
 *
 */

const TableHeader = ({ columns, onSort, sortOptions }) => {
  const { path, order } = sortOptions;

  return (
    <thead>
      <tr className="bg-light text-dark">
        {columns.map((column) => (
          <th
            key={column.path || column.content.toString()}
            scope="col"
            onClick={() => onSort(column.path)}
            className="clickable"
          >
            {column.title}
            {path && column.path === path && (
              <i className={`fa fa-sort-${order} ml-1`} aria-hidden="true"></i>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
