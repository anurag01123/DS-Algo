function linear_search(arr, searchkey)
{
  for(let i=0;i<n;i++)
  {
    if(arr[i]===searchkey)
    {
      return(i);
    }
    else
    {
      return(null);
    }
  }
}

var n = prompt("Enter the size of the array");
var arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = prompt("Enter the elements");
}
var k = prompt("Enter the element you want to search");
var result = linear_search(arr, k);
if(result !== null)
{
  console.log("The given element is in the array at position ", result);
}
else
{
  console.log("The given element is not in the array");
}

