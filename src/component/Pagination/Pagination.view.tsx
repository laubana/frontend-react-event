import React, { useEffect, useState } from "react";
import { PaginationProps } from "./Pagination.props";
import { Container, Item, ItemContainer } from "./Pagination.style";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const Pagination = (props: PaginationProps): JSX.Element => {
  const { items, groupItemNumber = 10, groupPageNumber = 3, onClick } = props;

  const [currentPageIndex, setCurrentPageIndex] = useState<number>(1);

  const totalPageNumber = Math.ceil(items.length / groupItemNumber);
  const bias = Math.floor(groupPageNumber / 2);
  const pageIndexs = [];
  for (let i = currentPageIndex - bias; i <= currentPageIndex + bias; i++) {
    if (1 <= i && i <= totalPageNumber) {
      pageIndexs.push(i);
    }
  }

  const handleClick = (pageIndex: number) => {
    setCurrentPageIndex(pageIndex);
  };

  useEffect(() => {
    onClick(
      items.slice(
        (currentPageIndex - 1) * groupItemNumber,
        currentPageIndex * groupItemNumber
      )
    );
  }, [currentPageIndex]);

  return (
    <Container>
      {1 < currentPageIndex && (
        <ItemContainer>
          <Item onClick={() => handleClick(currentPageIndex - 1)} edge>
            <HiArrowSmallLeft />
          </Item>
        </ItemContainer>
      )}
      <ItemContainer>
        {pageIndexs.map((pageIndexMapItem, pageIndexMapIndex) => {
          if (pageIndexMapItem === currentPageIndex) {
            return (
              <Item
                onClick={() => handleClick(pageIndexMapItem)}
                selected
                key={pageIndexMapIndex}
              >
                {pageIndexMapItem}
              </Item>
            );
          } else {
            return (
              <Item
                onClick={() => handleClick(pageIndexMapItem)}
                key={pageIndexMapIndex}
              >
                {pageIndexMapItem}
              </Item>
            );
          }
        })}
      </ItemContainer>
      {currentPageIndex < totalPageNumber && (
        <ItemContainer>
          <Item onClick={() => handleClick(currentPageIndex + 1)} edge>
            <HiArrowSmallRight />
          </Item>
        </ItemContainer>
      )}
    </Container>
  );
};

export default React.memo(Pagination);
