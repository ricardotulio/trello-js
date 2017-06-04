'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var boards = {
  base: '/1/members/me/boards',
  lists: function lists(id) {
    return '/1/boards/' + id + '/lists/';
  },
  cards: function cards(id) {
    return '/1/boards/' + id + '/cards';
  }
};

var cards = {
  find: function find(id) {
    return '/1/cards/' + id;
  },
  actions: function actions(id) {
    return '/1/cards/' + id + '/actions';
  }
};

exports.default = {
  boards: boards,
  cards: cards
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9yb3V0ZXMuanMiXSwibmFtZXMiOlsiYm9hcmRzIiwiYmFzZSIsImxpc3RzIiwiaWQiLCJjYXJkcyIsImZpbmQiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFNBQVM7QUFDYkMsUUFBTSxzQkFETztBQUViQyxTQUFPO0FBQUEsMEJBQW1CQyxFQUFuQjtBQUFBLEdBRk07QUFHYkMsU0FBTztBQUFBLDBCQUFtQkQsRUFBbkI7QUFBQTtBQUhNLENBQWY7O0FBTUEsSUFBTUMsUUFBUTtBQUNaQyxRQUFNO0FBQUEseUJBQWtCRixFQUFsQjtBQUFBLEdBRE07QUFFWkcsV0FBUztBQUFBLHlCQUFrQkgsRUFBbEI7QUFBQTtBQUZHLENBQWQ7O2tCQUtlO0FBQ2JILGdCQURhO0FBRWJJO0FBRmEsQyIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2FyZHMgPSB7XG4gIGJhc2U6ICcvMS9tZW1iZXJzL21lL2JvYXJkcycsXG4gIGxpc3RzOiBpZCA9PiBgLzEvYm9hcmRzLyR7aWR9L2xpc3RzL2AsXG4gIGNhcmRzOiBpZCA9PiBgLzEvYm9hcmRzLyR7aWR9L2NhcmRzYCxcbn1cblxuY29uc3QgY2FyZHMgPSB7XG4gIGZpbmQ6IGlkID0+IGAvMS9jYXJkcy8ke2lkfWAsXG4gIGFjdGlvbnM6IGlkID0+IGAvMS9jYXJkcy8ke2lkfS9hY3Rpb25zYCxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBib2FyZHMsXG4gIGNhcmRzLFxufVxuIl19