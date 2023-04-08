#include "graph.h"

Graph::Graph(int n)
{
    mEdges.resize(n);
}

void Graph::addEdge(int from, int to, int cost)
{
    mEdges[from].emplace_back(Edge{to, cost});
}

const std::vector<Edge>& Graph::getEdges(int from)
{
    return mEdges[from];
}

int Graph::numberOfEdges() const
{
    return mEdges.size();
}