const Form = ({ setValue, addMutation, value }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addMutation.mutate(value, {
          onSuccess: () => {
            setValue('');
          },
        });
      }}
    >
      <input
        placeholder="enter something"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
    </form>
  );
};

export default Form;
