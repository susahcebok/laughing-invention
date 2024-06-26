// open console and paste this on any website to see
// redirect to
redirect('https://example.com');
 
// callback function for end progress funciton
function redirect(el){
	return progress(function(){
		location.href = el;
	});
}
 
// progress(callback)
function progress (_success){
	//  create two elements
	var a = document.createElement('span');
	var b = document.createElement('span');
 
	var w = 0;
	// progress style
	a.className = 'progress-info';
	a.style.position = 'fixed';
	a.style.top = '0';
	a.style.left = '0';
	a.style.right = '0';
	a.style.bottom = '0';
	a.style.width = '100%';
	a.style.height = '100%';
	a.style.padding = '2em 0';
  	a.style.textAlign = 'center';
	a.style.display = 'block';
	a.style.fontSize = '100px';
	a.style.fontFamily = 'sans-serif';
	a.style.color = '#f55';
  	a.style.background = 'rgba(250, 250, 250, 0.8)';
	a.style.zIndex = '99999999999999';	
 
 
	// counter style
	b.className = 'bar';
	b.style.position = 'fixed';
	b.style.top = '0';
	b.style.left = '0';
	b.style.height = '0.1em';
	b.style.display = 'block';
	b.style.background ='#f55';
	b.style.width = '0%';
	b.style.zIndex = '99999999999999';		
	
	// append elements
	document.body.appendChild(a);
	document.body.appendChild(b);
	
  // progress function
	var t = setInterval(function(){
		w = w+1;
		// show number
		a.innerHTML = w + '%';
		// show bar
		b.style.width = w + '%';
		// on finish
		if (w === 100){ 
	  		clearInterval(t);
	  		w = 0;
	  		if(_success()) return _success();
		}
	},20);
}
