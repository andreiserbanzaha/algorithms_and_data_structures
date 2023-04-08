#include "dijkstra.h"

#include <iostream>

int main()
{
    Graph g{5};

    g.addEdge(0, 1, 4);
    g.addEdge(0, 2, 1);
    g.addEdge(1, 3, 1);
    g.addEdge(2, 1, 2);
    g.addEdge(2, 3, 5);
    g.addEdge(3, 4, 3);

    int startPoint = 0;
    auto res = dijkstra(g, startPoint);
    for (unsigned int i = 0; i < res.size(); ++i)
    {
        std::cout << startPoint << "->" << i << " " << res[i] << '\n';
    }

    return 0;
}
