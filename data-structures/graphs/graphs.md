# Graphs

- most used when modeling real life


- **nodes(vertexes)** connected with **edges**


- can be:
  - **directed** (can only go in *some* direction)
    - e.g. roads -> some are one way only
    - e.g. twitter -> some people follow you, but you don't necessarily follow back
  - **undirected** (can go in both directions)
    - e.g. facebook friendships -> both ways


- can be:
  - **weighted** - edges have information
  - **unweighted** - edges *don't* have information


- can be:
  - **cyclic** - nodes are connected in a circular fashion
  - **acyclic** - not circular
    - e.g. trees, linked lists etc


- ways to represent graphs:
  - **edge list**
  - **adjacent list**
    - index is the *node*
    - value is the nodes *neighbors*
  - **adjacent matrix**
    - matrix with 0s and 1s, which represent if the nodes are connected or not


- very good for managing relationships
- scaling is hard


- neo4j - popular database
