const allNumbers = Array.from(Array(100).keys())

State.init({
  displayNums: [],
  lastNumber: 0,
});

const loadNumbers = (page) => {
  allNumbers
    .slice(state.lastNumber, state.lastNumber + 10)
    .map((n) => numberToElem(n))
    .forEach((i) => state.displayNums.push(i));
  state.lastNumber += 10;
  State.update();
};

const numberToElem = (number) => <div> {number} </div>;

return (
  <div>
    <InfiniteScroll
      loadMore={loadNumbers}
      hasMore={state.displayNums.length < allNumbers.length}
    >
      {state.displayNums}
    </InfiniteScroll>
  </div>
);