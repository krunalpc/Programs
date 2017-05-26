// Removing forst element from a vector
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> arr = {1, 2, 3, 4};   
    
    arr.erase (arr.begin());
   
    for(unsigned  i=0; i<arr.size(); ++i)
        std::cout << arr[i] << ' ';
   
}