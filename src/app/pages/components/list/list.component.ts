import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetTodos, DeleteTodo, SetSelectedTodo } from '../../actions/todo.action';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { TodoState } from '../../states/data.state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Select(TodoState.getTodoList) todos: Observable<Todo[]>;

    constructor(private store: Store) {
    }

    ngOnInit() {
        this.store.dispatch(new GetTodos());
    }

    deleteTodo(id: number) {
      this.store.dispatch(new DeleteTodo(id));
  }

  editTodo(payload: Todo) {
      this.store.dispatch(new SetSelectedTodo(payload));
  }

}
