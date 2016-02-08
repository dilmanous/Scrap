#include <stdio.h>

void reverse(* string) 
{
  char * start = string ;
  char * end = start ;
  // Find the end of the string
  while (* end) 
  {
    end++ ;
  }
  end-- ;
  while ( start < end ) 
  {
    char * temp = start ;
    *start++ =  *end ;
    *end-- = *temp ;
  }
}

int main (int argc, * char args) 
{
  
}
