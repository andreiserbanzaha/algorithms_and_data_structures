cmake_minimum_required(VERSION 3.17)

project(dijkstra)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(
    ${PROJECT_NAME} 
    main.cpp 
    edge.h 
    graph.h 
    graph.cpp 
    dijkstra.h 
    dijkstra.cpp
)
