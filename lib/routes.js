const boards = {
  base: '/1/members/me/boards',
  lists: id => `/1/boards/${id}/lists/`,
  cards: id => `/1/boards/${id}/cards`,
}

const cards = {
  find: id => `/1/cards/${id}`,
  actions: id => `/1/cards/${id}/actions`,
}

export default {
  boards,
  cards,
}
