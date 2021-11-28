export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  const styleIncompleteArea = {
    backgroundColor: "#c6ffe2",
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
    <div style={styleIncompleteArea}>
      <p style={styleTitle}>お買い物メモ</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} style={styleListRow}>
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>
                カゴに入れた
              </button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
