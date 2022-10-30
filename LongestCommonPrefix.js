const strs=["misha", "miss","misti"]

var longestCommonPrefix = function(strs) {
    if(strs==null||strs.length==0)
        return "";
        strs.sort();
        console.log("strs",strs[0])
        let i=0;
    
    while(i<strs[0].length){
        console.log("strs[0].length",strs[strs.length-1][0])
        
        if(strs[0][i]!==strs[strs.length-1][i]){
            return strs[0].substr(0,i);}
            i++;
        }
        
    return strs[0]

};

console.log(longestCommonPrefix(strs))
