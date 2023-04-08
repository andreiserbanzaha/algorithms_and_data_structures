#include <iostream>
#include <vector>

template <typename T>
void selectionSort(std::vector<T>& v)
{
	for (int i = 0; i < v.size() - 1; ++i)
	{
		T min = i;

		for (int j = i + 1; j < v.size(); ++j)
		{
			if (v[j] < v[min])
			{
				min = j;
			}
		}

		if (min != i)
		{
			T temp = v[i];
			v[i]   = v[min];
			v[min] = temp;
		}
	}
}

int main()
{
	std::vector<int> v{4, 3, 8, 6, 1, 2, 7, 5, 0, 9};

	selectionSort(v);

	for(auto const& elem : v)
	{
		std::cout << elem << ' ';
	}
	std::cout << '\n';

	return 0;
}
