import { styled } from "styled-components";
import { useCallback, useMemo, useState } from "react";
import { SortArrow, SortDESCIcon } from "../_pcs-shims";

const SortBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  padding: 1px 2px 3px;
  margin-left: 4px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.tertiary};
  overflow: hidden;
  path {
    fill: ${({ theme }) => theme.colors.textDisabled};
  }
  &.descend {
    background: ${({ theme }) => theme.colors.textSubtle};
    border-bottom-color: rgba(0, 0, 0, 0.3);
    path:first-child { fill: rgba(255, 255, 255, 1); }
    path:last-child { fill: rgba(255, 255, 255, 0.3); }
  }
  &.ascend {
    background: ${({ theme }) => theme.colors.textSubtle};
    border-bottom-color: rgba(0, 0, 0, 0.3);
    path:first-child { fill: rgba(255, 255, 255, 0.3); }
    path:last-child { fill: rgba(255, 255, 255, 1); }
  }
`;

const SortDESCBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  padding: 1px 2px 3px;
  margin-left: 4px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.tertiary};
  overflow: hidden;
  path {
    fill: ${({ theme }) => theme.colors.textDisabled};
  }
  &.descend {
    background: ${({ theme }) => theme.colors.textSubtle};
    border-bottom-color: rgba(0, 0, 0, 0.3);
    path { fill: rgba(255, 255, 255, 1); }
  }
`;

export enum SORT_ORDER {
  NULL = 0,
  ASC = 1,
  DESC = -1,
}
export type ISortOrder = SORT_ORDER.NULL | SORT_ORDER.ASC | SORT_ORDER.DESC;

interface ISortArrowButton {
  width?: string;
  height?: string;
  onSort?: (sortOrder: ISortOrder) => void;
  sortOrder?: ISortOrder;
  onlyDESC?: boolean;
}

export const SortArrowButton = (props: ISortArrowButton) => {
  const { onSort, sortOrder, onlyDESC, width = "14px", ...rest } = props;
  const [sortOrderInner, setSortOrderInner] = useState<ISortOrder>(SORT_ORDER.NULL);

  const order = useMemo(() => (onSort ? sortOrder : sortOrderInner), [sortOrder, sortOrderInner, onSort]);

  const handleClick = useCallback(() => {
    const nextSortOrder =
      order === SORT_ORDER.NULL ? SORT_ORDER.DESC : order === SORT_ORDER.DESC ? SORT_ORDER.ASC : SORT_ORDER.NULL;
    if (onSort) {
      onSort(nextSortOrder);
    } else {
      setSortOrderInner(nextSortOrder);
    }
  }, [onSort, order]);

  const cls = useMemo(() => {
    switch (order) {
      case SORT_ORDER.DESC: return "descend";
      case SORT_ORDER.ASC: return "ascend";
      default: return "";
    }
  }, [order]);

  return onlyDESC ? (
    <SortDESCBtn onClick={handleClick} className={cls}>
      <SortDESCIcon width={width} height={width} />
    </SortDESCBtn>
  ) : (
    <SortBtn onClick={handleClick} className={cls}>
      <SortArrow width={width} height={width} />
    </SortBtn>
  );
};
