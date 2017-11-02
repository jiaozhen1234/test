function ajax(url,callback) {
    var xml = new XMLHttpRequest();
    xml.open("get", url);
    xml.send(null);
    xml.onreadystatechange = function () {
         if(xml.status==200 && xml.readyState==4){
             callback(JSON.parse(xml.responseText))
         }
    }
}