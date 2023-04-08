#include <iostream>

template<typename T, unsigned int N>
T* bubbleSort(T* arr)
{
	T* newArr = new int[N];
	for(int i = 0; i < N; ++i)
	{
		newArr[i] = arr[i];
	}

	for (int i = N; i > 0; --i)
	{
		bool noSwap = true;

		for (int j = 0; j < i - 1; ++j)
		{
			if (newArr[j] > newArr[j + 1])
			{
				T temp = newArr[j];
				newArr[j] = newArr[j + 1];
				newArr[j + 1] = temp;
				noSwap = false;
			}
		}
		if (noSwap)
		{
			break;
		}
	}

	return newArr;
}

int main()
{
	constexpr int size = 10;
	int arr[size] = {6, 3, 2, 7, 1, 8, 9, 5, 4, 0};

	auto x = bubbleSort<int, size>(arr);

	for (int i = 0; i < size; ++i)
	{
		std::cout << x[i] << ' ';
	}
	std::cout << '\n';

	return 0;
}
