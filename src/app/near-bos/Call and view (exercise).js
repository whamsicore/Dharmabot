State.init({
  value: "value to update",
  message: "", // Initialize message state
});

console.log(Near.view("nearsocialexamples.near", "get_greeting"));

const testCall = () => {
  return Near.call("nearsocialexamples.near", "set_greeting", {
    message: state.message, // Use the message from state
  });
};

const testView = () => {
  State.update({
    value: Near.view("nearsocialexamples.near", "get_greeting"),
  });
};

const handleMessageChange = (event) => {
  State.update({ message: event.target.value }); // Update message in state on input change
};

return (
  <div>
    <input type="text" value={State.message} onChange={handleMessageChange} placeholder="Enter your message" />
    <button onClick={testCall}>test call</button>
    <button onClick={testView}>test view</button>

    <div>message: {state.message}</div>
    <div>{state.value}</div>
  </div>
);