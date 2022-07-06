const LoadMoreOld = ({
  hasNextPage,
  hasPreviousPage,
  isFetchingNextPage,
  isFetchingPreviousPage,
  fetchPreviousPage,
}) => {
  return (
    <div>
      <button
        onClick={() => fetchPreviousPage()}
        disabled={!hasPreviousPage || isFetchingPreviousPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load Older'
          : 'Nothing more to load'}
      </button>
    </div>
  );
};

export default LoadMoreOld;
