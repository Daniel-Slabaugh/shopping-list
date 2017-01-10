

var state = {
    shoppingList: []
};

// State modification functions
var addItem = function(state, item) {
	var listObject = {name:item, checked:false};
	// listObject.id = state.shoppingList.length;
    state.shoppingList.push(listObject);
};

var toggleItem = function(state, objToggle) {
	for (var i = 0; i < state.shoppingList.length; i++) {
		if(state.shoppingList[i].name === objToggle.text()) {
			state.shoppingList[i].checked = !state.shoppingList[i].checked;
			break;
		}
	}
	// state.shoppingList[id].checked = !state.shoppingList[id].checked;
};

var deleteItem = function(state, objDelete) {
		for (var i = 0; i < state.shoppingList.length; i++) {
		if(state.shoppingList[i].name === objDelete.text()) {
  			state.shoppingList.splice(i, 1);
			break;
		}
	}
};

// Render functions
var renderList = function(state, element) {
    var itemsHTML = state.shoppingList.map(function(item) {
		var check = (item.checked) ? " shopping-item__checked" : "";

        return '<li>' +
        '<span class="shopping-item' + check + '">' + item.name + 
        '</span>' + 
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>'

    });
    element.html(itemsHTML);
};

// Event listeners
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});


$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    event.preventDefault();
    var currentElement = $(this).closest('li').find('.shopping-item');
    toggleItem(state, currentElement);
    renderList(state, $('.shopping-list'));
});


$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    event.preventDefault();
    var currentElement = $(this).closest('li').find('.shopping-item');
    deleteItem(state, currentElement);
    renderList(state, $('.shopping-list'));
});



