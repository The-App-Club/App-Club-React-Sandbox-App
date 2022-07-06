const ClearButton = ({ clearMutation }) => {
  return (
    <div>
      <button
        onClick={() => {
          clearMutation.mutate();
        }}
      >
        Clear All
      </button>
    </div>
  );
};

export default ClearButton;
