# Write a function to find the longest common prefix string amongst an array of strings.
# If there is no common prefix, return an empty string ""

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

### Explanation:-
1. if strs is null or strs length is 0 then return blank string ("")
2. then sort the string by used sort method strs.sort(), so we can only compare the first and last string of array 
3. let i=0, used while loop check if i is smaller than the first string of array (i<strs[0].length),(0<5)it means condition true then 
                 if(strs[0][i]!==strs[strs.length-1][i]){
                 
               if(strs[0][0]!==strs[3-1][0])

                     if(m!== strs[2][0])

                  if(m!==m)
                             
                     return strs[0].substr(0,i);}
                     
                     misha.substr(0,3)
                                        
                    return mis  0 start, 3 is length

                       i++;
                       
                    }
                    
if false then return strs[0]
