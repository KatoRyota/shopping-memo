export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;

  const styleCompleteArea = {
    backgroundColor: "#ffffe0",
    width: "400px",
    minHeight: "200px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };

  const styleTitle = {
    textAlign: "center",
    marginTop: "0",
    fontWeight: "bold",
    color: "#666"
  };

  const styleListRow = {
    display: "flex",
    alignItems: "center",
    paddingBottom: "4px"
  };

  return (
    <div style={styleCompleteArea}>
      <p style={styleTitle}>買い物カゴ</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} style={styleListRow}>
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
