var httpprotocol = window.location.protocol.substring(0, window.location.protocol.length - 1); var wsprotocol = httpprotocol == 'https' ? 'wss' : 'ws'; var wsport = httpprotocol == 'https' ? '8083' : '8080';
window.onload = function() {
	var body=document.body;
	body.socket = new WebSocket(wsprotocol+'://localhost:'+wsport+'/room/', 'DOMString');
	body.socket.onmessage = function(event){
		var a=event.data;
		console.log('message '+a);
	};
	body.socket.onopen = function() {
		body.isws=true;body.isconn=true;
	};
	body.socket.onerror = function() {
		try { body.socket.close(); } catch (e) {}				
	body.socket.onclose = function() {
		setTimeout(function() { body.conn(); }, 1000);
	};
}
