var dataCart = [];

// Afrrays of categories and their images 

// social items -> social 
// TODO: social media 

var social = [
	{	name: 'Facebook',
		icon: 'fa fa-user-circle',
		price: 10
	},
	{	name: 'Instagram',
		icon: 'fa fa-address-book-o',
		price: 10
	},
	{	name: 'Twitter',
		icon: 'fa fa-address-card',
		price: 10
	}, 
	{	name: 'LinkedIn', 
		icon: 'fa fa-certificate', 
		price: 10
	}
];

// Juice items -> health 
// Health 

var health = [
	{	name: 'Apple Health', 
		icon: 'fa fa-sun-o', 
		price: 10
	},
	{	name: 'Fitbit', 
		icon: 'fa fa-bar-chart',
		price: 10
	},
];

// search items -> search xs
// TODO: Search engine 

var search = [
	{	name: 'Google', 
		icon: 'fa fa-search',
		price: 10
	},
	{	name: 'Yahoo', 
		icon: 'fa fa-desktop',
		price: 10
	},
];


// Click handlers each source of data

document.getElementById('social').addEventListener('click',function() {
	addDataItems('social');
});

document.getElementById('health').addEventListener('click',function() {
	addDataItems('health');
});


document.getElementById('search').addEventListener('click',function() {
	addDataItems('search');
});



// Click Handlers for each item 

document.getElementById('data-items').addEventListener('click', function() {

	// create a variable for the selction to pass to cart function 
	// currently not working 
	var itemName = getElementById('data-item > p').text;

	console.log('item clicked');

	// pass variable to cart function 
	addItemToDataCart(itemName);

});


// Add data items to our page based on category slected 

function addDataItems(category) {

	// first, clear out all items I am currently showing
	cleardataItems();

	// empty array of items for display
	var myItems;

	// depending on category, populate array accordningly 

	switch(category) {
		case 'social':
			myItems = social;
			break;
		case 'health':
			myItems = health;
			break;
		case 'search':
			myItems = search;
			break;
		default:
	}

	// populate new ul with icon and name 
	// I tried to use icons instead of the provided pictures -- currently not working
	var newList = $('<ul>');
	for(var i = 0; i < myItems.length; i++) {
		var currentItem = myItems[i];

		newList.append(
			`<li class="data-item">
				<i class="${currentItem.icon}" aria-hidden="true"></i>
				<p>${currentItem.name}</p>
			</li>`);
	}

	// apprend the new list variable under the class data-items 
	$('#data-items').append(newList);
}

// empties data items to show new ones based on the category picked by the user 

function cleardataItems() {
	$('#data-items').empty();
}

// function called to append the ordered list under the class data-cart 

function addItemToDataCart(item) {
	$('#data-cart ul').append(`
		<li>
		${item} 
		</li>

	`);
}
