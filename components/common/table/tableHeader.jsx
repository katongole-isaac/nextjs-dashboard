/**
 * Table Header component
 *
 */


const TableHeader = ({ columns, onSort, sortOptions }) => {
  
  const { path, order } = sortOptions;

  const raiseSort  = (path) => {

    const sortOpt = { ...sortOptions};

    if (path === "") return;

    if (path !== sortOptions.path)
    sortOpt.path = path;

    else 
      sortOpt.order = sortOpt.order === "asc" ? "desc" : "asc"
        
    onSort(sortOpt);
  };

  return (
    <thead>
      <tr className="bg-light text-dark">
        {columns.map((column) => (
          <th
            key={column.path || column.content.toString()}
            scope="col"
            onClick={() => raiseSort(column.path)}
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
