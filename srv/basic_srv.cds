

@path:'/basic'
@impl:'srv/basic.js'
service BasicService {
    function ping() returns String;
    function hello(to:String) returns String;
    function sum(a:Int32,b:Int32) returns Integer;
    

}