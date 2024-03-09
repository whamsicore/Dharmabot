const options = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];

return (
  <div class="container min-vh-100 min-vw-100">
    <Typeahead
      options={options}
      multiple
      onChange={(value) => {State.update({choose: value})}}
      placeholder='Choose a fruit...'
    />
    <hr />
    <p> Selected: {JSON.stringify(state.choose)} </p>
  </div>
);