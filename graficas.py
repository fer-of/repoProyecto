import matplotlib.pyplot as plt
import networkx as nx

def graficar_bfs():
    G = nx.Graph()
    G.add_edges_from([('a', 'b'), ('a', 'd'), ('b', 'c'), ('d', 'c')])
    pos = nx.spring_layout(G)  # Layout automático para una visualización limpia
    nx.draw(G, pos, with_labels=True, node_color='skyblue', edge_color='gray', font_weight='bold')
    plt.title("BFS Graph")
    plt.show()

def graficar_mst():
    G = nx.Graph()
    G.add_edge('a', 'b', weight=1)
    G.add_edge('b', 'c', weight=2)
    G.add_edge('c', 'd', weight=3)
    pos = nx.spring_layout(G)
    nx.draw(G, pos, with_labels=True, node_color='lightgreen', edge_color='gray', font_weight='bold')
    labels = nx.get_edge_attributes(G, 'weight')
    nx.draw_networkx_edge_labels(G, pos, edge_labels=labels)
    plt.title("Minimum Spanning Tree (MST) Graph")
    plt.show()

def graficar_dijkstra():
    G = nx.DiGraph()
    G.add_edge('a', 'b', weight=1)
    G.add_edge('a', 'c', weight=4)
    G.add_edge('b', 'c', weight=2)
    G.add_edge('c', 'd', weight=3)
    pos = nx.spring_layout(G)
    nx.draw(G, pos, with_labels=True, node_color='lightblue', edge_color='gray', font_weight='bold')
    labels = nx.get_edge_attributes(G, 'weight')
    nx.draw_networkx_edge_labels(G, pos, edge_labels=labels)
    plt.title("Dijkstra's Algorithm Graph")
    plt.show()

def graficar_floyd_warshall():
    G = nx.DiGraph()
    edges = [
        ('a', 'b', 3), ('a', 'd', 7), 
        ('b', 'c', 2), 
        ('c', 'a', 5), ('c', 'd', 1), 
        ('d', 'a', 2)
    ]
    G.add_weighted_edges_from(edges)
    pos = nx.spring_layout(G)
    nx.draw(G, pos, with_labels=True, node_color='lightcoral', edge_color='gray', font_weight='bold')
    labels = nx.get_edge_attributes(G, 'weight')
    nx.draw_networkx_edge_labels(G, pos, edge_labels=labels)
    plt.title("Floyd-Warshall Graph")
    plt.show()

def graficar_bellman_ford():
    G = nx.DiGraph()
    edges = [
        ('a', 'b', 1), ('b', 'c', 3), 
        ('a', 'c', 4), ('c', 'd', 1)
    ]
    G.add_weighted_edges_from(edges)
    pos = nx.spring_layout(G)
    nx.draw(G, pos, with_labels=True, node_color='lightgoldenrodyellow', edge_color='gray', font_weight='bold')
    labels = nx.get_edge_attributes(G, 'weight')
    nx.draw_networkx_edge_labels(G, pos, edge_labels=labels)
    plt.title("Bellman-Ford Algorithm Graph")
    plt.show()

# Llamar a las funciones para graficar cada uno
graficar_bfs()
graficar_mst()
graficar_dijkstra()
graficar_floyd_warshall()
graficar_bellman_ford()
