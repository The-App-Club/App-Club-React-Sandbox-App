const LoadMore = ({
  loadMoreButtonRef,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}) => {
  return (
    <div>
      <button
        ref={loadMoreButtonRef}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load Newer'
          : 'Nothing more to load'}
      </button>
    </div>
  );
};

export default LoadMore;
