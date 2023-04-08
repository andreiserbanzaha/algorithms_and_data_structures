#ifndef DIJKSTRA_GRAPH_H
#define DIJKSTRA_GRAPH_H

#include "edge.h"

#include <vector>

class Graph
{
public:
    Graph(int n);

    void addEdge(int from, int to, int cost);

    const std::vector<Edge>& getEdges(int from);

    int numberOfEdges() const;

private:
    std::vector<std::vector<Edge>> mEdges;
};

#endif // DIJKSTRA_GRAPH_H