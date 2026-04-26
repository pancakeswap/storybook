import { useCallback } from "react";
import styled from "styled-components";
import type { ISortOrder } from "./SortArrowButton";
import { SORT_ORDER, SortArrowButton } from "./SortArrowButton";

export interface BasicDataType {
  [key: string]: any;
}

export interface IColumnsType<T extends BasicDataType> {
  title: React.ReactNode | (() => React.ReactNode);
  dataIndex: keyof T | null;
  key: React.Key;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  sorter?: boolean;
  minWidth?: string;
  width?: string;
  display?: boolean;
  clickable?: boolean;
  align?: 'left' | 'center' | 'right';
}

export interface ITableViewProps<T extends BasicDataType> {
  getRowKey?: (item: T) => string;
  rowKey?: string;
  columns: IColumnsType<T>[];
  data: T[];
  rowStyle?: React.CSSProperties;
  onSort?: (parms: { dataIndex: IColumnsType<T>["dataIndex"]; order: ISortOrder }) => void;
  sortOrder?: ISortOrder;
  sortField?: IColumnsType<T>["dataIndex"];
  onRowClick?: (record: T, e: React.MouseEvent) => void;
}

const Table = styled.table`
  width: 100%;

  tr {
    th,
    td {
      padding: 16px;
      vertical-align: middle;
    }

    td {
      display: table-cell;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      align-self: stretch;
    }

    th {
      padding-top: 16px;
      padding-bottom: 16px;
    }
  }
`;

const TableHeader = styled.thead`
  text-align: left;
  th {
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    vertical-align: middle;
    color: ${({ theme }) => theme.colors.secondary};

    button {
      margin-left: 8px;
    }
  }
`;

const TableBody = styled.tbody``;

const Row = styled.tr<{ $withLink?: boolean }>`
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transition: background 0.2s ease-in-out;
  ${({ $withLink, theme }) =>
    $withLink &&
    `
    cursor: pointer;

    &:hover {
      background: ${theme.isDark ? theme.colors.v2Disabled10 : theme.colors.backgroundHover};
    }

    &:active {
      background: ${theme.colors.backgroundTapped};
    }
  `}

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }
`;

const Cell = styled.td``;

interface ITableCellProps<T extends BasicDataType> {
  col: IColumnsType<T>;
  data: T;
  idx: number;
}

const TableCell = <T extends BasicDataType>({ col, data, idx }: ITableCellProps<T>) => {
  return (
    <Cell
      key={col.key}
      style={{
        display: col.display === false ? "none" : "table-cell",
        textAlign: col.align ?? 'left',
      }}
      data-un-clickable={col.clickable === false ? true : undefined}
    >
      {col.render
        ? col.render(col.dataIndex ? data[col.dataIndex] : data, data, idx)
        : col.dataIndex
        ? data[col.dataIndex]
        : null}
    </Cell>
  );
};

export const TableView = <T extends BasicDataType>({
  columns,
  data,
  rowKey,
  getRowKey: getRowKey_,
  onSort,
  sortOrder,
  sortField,
  onRowClick,
  rowStyle,
}: ITableViewProps<T>) => {
  const getRowKey = useCallback(
    (rowData: T) =>
      getRowKey_
        ? getRowKey_(rowData)
        : rowKey
        ? rowData[rowKey]
        : rowData.key ?? Object.values(rowData).slice(0, 2).join("-"),
    [rowKey, getRowKey_]
  );

  const handleSort = useCallback(
    (order: ISortOrder, dataIndex: IColumnsType<T>["dataIndex"]) => {
      onSort?.({ order, dataIndex });
    },
    [onSort]
  );

  const handleClick = useCallback(
    (item: T, e: React.MouseEvent<HTMLTableRowElement>) => {
      if (e.target instanceof Element && e.target.closest(`[data-un-clickable]`)) {
        return;
      }
      onRowClick?.(item, e);
    },
    [onRowClick]
  );

  return (
    <Table>
      <TableHeader>
        <Row style={rowStyle}>
          {columns.map((col) => (
            <th
              key={col.key}
              style={{
                minWidth: col.minWidth ?? "auto",
                width: col.width ?? "auto",
                display: col.display === false ? "none" : "table-cell",
                textAlign: col.align ?? 'left',
              }}
            >
              {typeof col.title === "function"
                ? col.title()
                : typeof col.title === "string"
                ? col.title.toUpperCase()
                : col.title}
              {col.sorter ? (
                <SortArrowButton
                  onlyDESC
                  width="14px"
                  onSort={(e) => handleSort(e, col.dataIndex)}
                  sortOrder={sortField === col.dataIndex ? sortOrder : SORT_ORDER.NULL}
                />
              ) : null}
            </th>
          ))}
        </Row>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <Row style={rowStyle} $withLink={!!onRowClick} key={getRowKey(item)} onClick={(e) => handleClick(item, e)}>
            {columns.map((col, idx) => (
              <TableCell col={col} data={item} idx={idx} key={col.key} />
            ))}
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};
