#include "dijkstra.h"

#include <limits>
#include <iostream>
#include <queue>
#include <utility>

class Compare
{
public:
    bool operator()(std::pair<int, int> a, std::pair<int, int> b)
    {
        return a.second > b.second;
    }
};

std::vector<int> dijkstra(Graph& graph, int start)
{
    std::vector<bool> visited(graph.numberOfEdges(), false);

    std::vector<int> dist(
        graph.numberOfEdges(), 
        std::numeric_limits<int>::max());

    dist[start] = 0;

    std::priority_queue<
        std::pair<int, int>, 
        std::vector<std::pair<int, int>>, 
        Compare> pq;

    pq.push(std::pair<int, int>{start, 0});

    while (pq.size() != 0)
    {
        std::pair<int, int> curr = pq.top();
        std::cout << "pop: " << curr.first << ' ' << curr.second << '\n';
        visited[curr.first] = true;
        for (const auto& edge : graph.getEdges(curr.first))
        {
            if (visited[edge.to])
            {
                continue;
            }

            int newDist = dist[curr.first] + edge.cost;
            if (newDist < dist[edge.to])
            {
                dist[edge.to] = newDist;
                pq.emplace(std::pair<int, int>{edge.to, newDist});
                std::cout << "add: " << edge.to << ' ' << newDist << '\n';
            }
        }
        pq.pop();
    }

    return dist;
}
