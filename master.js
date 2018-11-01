
(function(document) {
	'use strict';

	var LightTableFilter = (function(Arr) {

		var _input;

		function _onInputEvent(e) {
			_input = e.target;
			var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
			Arr.forEach.call(tables, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, _filter);
				});
			});
		}

		function _filter(row) {
			var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
		}

		return {
			init: function() {
				var inputs = document.getElementsByClassName('light-table-filter');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = _onInputEvent;
				});
			}
		};
	})(Array.prototype);

	document.addEventListener('readystatechange', function() {
		if (document.readyState === 'complete') {
			LightTableFilter.init();
		}
	});

// /* The Modal (background) */
// .modal {
//     display: none; /* Hidden by default */
//     position: fixed; /* Stay in place */
//     z-index: 1; /* Sit on top */
//     left: 0;
//     top: 0;
//     width: 100%; /* Full width */
//     height: 100%; /* Full height */
//     overflow: auto; /* Enable scroll if needed */
//     background-color: rgb(0,0,0); /* Fallback color */
//     background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
// }

//  Modal Content/Box 
// .modal-content {
//     background-color: #fefefe;
//     margin: 15% auto; /* 15% from the top and centered */
//     padding: 20px;
//     border: 1px solid #888;
//     width: 80%; /* Could be more or less, depending on screen size */
// }

// /* The Close Button */
// .close {
//     color: #aaa;
//     float: right;
//     font-size: 28px;
//     font-weight: bold;
// }

// .close:hover,
// .close:focus {
//     color: black;
//     text-decoration: none;
//     cursor: pointer;
// }


})(document);