function checkPermutation(a , b)
{
  // Sort two strings and check for similarity: O(nlogn)
  // For each char in one string, look for first occurence of it in the other and remove both O(n + n-1 + n-2 + n-3) = O(n^2) 
  // Using another data structure, count the number of occurence of each character for each string, they should match.
  if (a.length = 
} ;
//Wrong mergesort
function mergesort(a)
{
  if (a.length == 1)
  {
    return a;
  }
  else 
  {
    mergesort(merge(a.slice(0,parseInt(a.length/2), a.slice(parseInt(a.length/2)) , merged) ;
  }
} ;

function merge(l1 , l2 , l) 
{ 
  if (l1[0] == undefined) 
  {
    if (l2[0] == undefined) {return l ;}
    l[l.length] = l2[0] ; 
    merge(l1 , l2.slice(1 , l2.length) , l) ;
  }
  else if (l2[0] == undefined) 
  {
    if (l1[0] == undefined) {return l ;}
    l[l.length] =  l1[0] ;
     merge(l1.slice(1 , l1.length) , l2 , l ) ;
  }
  else 
  {
    if (l1[0] <= l2[0])
    {
      l[l.length] =  l1[0] ;
       merge(l1.slice(1 , l1.length) , l2 , l ) ;
    }
    else
    {
      l[l.length] = l2[0] ; 
       merge(l1 , l2.slice(1 , l2.length) , l) ;
    }
  }

 
}

// Rotate Matrix 90 degrees
// MAtrix is an array of arrays
function Rotate(m)
{
  numLayers = Math.ceil(m.length/2) ;
  for (var layer = 0 ; layer < numLayers ; layer++)
  {
    // send them in right based on their limitation
    if i is maxed go down , if i is min go up , if j is maxed go right, i j is min go left
    var 
  }
}

function sumpairs(k, l)
{
  l = l.sort() ; // nlogn
  result = [] ;
  min = l[0] ;
  max = l[l.length] ; 
  for (var i = 0 ; i<l.length-1 ; i++ ) // <= n * ...
  {
    if (k-l[i] <= max) possibleIndex = binarySearch(l.splice(i+1) , k - l[i]) ; // ... logn
    if (possibleIndex) result.push([l[i] , l[possibleIndex]]) ;  
  }
  return results ; 
  
}

// Sum two linkedlists
function append(nd, ll) {
  var currNode = ll.head ; 
  if (currNode == null) {
    nd.next = null ; 
    ll.head = nd ;
  }
  else 
  {
    while (currNode.next != null)
    {
    currNode = currNode.next ;
    }
  nd.next = null ;
  currNode.next = nd ;
  }
  
}

function SumLinkedLists(l1, l2) 
{
  var carry = 0 ;
  var sumList = null ;
  while (l1 != null || l2 != null) 
  {
    sum = (l1 == null ? 0 : l1.value) + (l2 == null ? 0 : l2.value) + carry ;
    if (sum >= 10) 
    {
      carry = Math.floor(sum/10) ;
    }
    else 
    {
      carry = 0 ;
    }
    append({value : sum % 10  , next : null} , sumList) ;
    l1 = l1.next ;
    l2 = l2.next ;
  }
}






































