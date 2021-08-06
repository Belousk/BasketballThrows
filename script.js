let throws = 0;
let throws_hit = 0;
let throws_miss = 0;
document.querySelector('.hit').onclick = function(e){
	throws+=1;
	document.querySelector('.quantity_throws').innerHTML = throws;
	throws_hit+=1;
	document.querySelector('.quantity_hit').innerHTML = throws_hit;
	if(throws % 100 === 0){
		document.querySelector('.quantity_hit').classList.remove('quantity_hit');
		document.querySelector('.quantity_miss').classList.remove('quantity_miss');
		throws_hit = 0;
		throws_miss = 0;
		document.querySelector('tbody').innerHTML+= `<tr>
				<td class="quantity_hit">0</td>
				<td class="quantity_miss">0</td>
			</tr>`;
	}
	e.preventDefault();
}
document.querySelector('.miss').onclick = function(e){
	throws+=1;
	document.querySelector('.quantity_throws').innerHTML = throws;
	throws_miss+=1;
	document.querySelector('.quantity_miss').innerHTML = throws_miss;
	if(throws % 100 === 0){
		throws_hit = 0;
		throws_miss = 0;
		document.querySelector('.quantity_hit').classList.remove('quantity_hit');
		document.querySelector('.quantity_miss').classList.remove('quantity_miss');
		document.querySelector('table').innerHTML+= `<tr>
				<td class="quantity_miss">0</td>
				<td class="quantity_hit">0</td>
			</tr>`;
	}
	e.preventDefault();
}