
export function dynamicSort(property,sortOrder =1 ) {

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return (b[property].toString()).localeCompare((a[property].toString()));
        }else{
            // return a[property].localeCompare(b[property]);
            return (a[property].toString()).localeCompare((b[property].toString()));
        }        
    }
}