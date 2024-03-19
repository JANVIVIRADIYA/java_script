#include <iostream>
using namespace std;

// Function to calculate the sum of elements in an array
int sumArray(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int size;
    cout << "Enter array size: ";
    cin >> size;

    int arr[size];
    cout << "Enter array elements:" << endl;
    for (int i = 0; i < size; i++) {
        cout << "a[" << i << "] = ";
        cin >> arr[i];
    }

    int sum = sumArray(arr, size);
    cout << "The sum of an Array: " << sum << endl;

    return 0;
}
