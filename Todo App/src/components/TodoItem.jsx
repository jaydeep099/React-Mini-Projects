function TodoItem() {

    let todoName ='Buy Milk';
    let todoDate ='4/10/2023';
    return(<div class="row jd-row">
    <div class="col-6">{todoName}</div>
    <div class="col-4">{todoDate}</div>
    <div class="col-2">
      <button type="button" class="btn btn-danger jd-button">
        Delete
      </button>
    </div>
  </div>);
}

export default TodoItem;