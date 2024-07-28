

@impl:'srv/plain.js'
@protocol:'rest'
@path:'plain'
service PlainService {

function theAnswer() returns Integer;
    
    @open action highestValue(a:array of  Integer) returns Integer;

}