/***************************
* Autor: Equipo 2
* Estructuras Discretas
* 2024-1
****************************/
// Representación del grafo como un objeto (lista de adyacencia)
const graph = {
  0: [1, 2],
  1: [0, 3, 4],
  2: [0, 5],
  3: [1],
  4: [1],
  5: [2]
};

// Función para resetear la visualización
function resetVisualization() {
  const nodes = document.querySelectorAll('.node');
  nodes.forEach(node => {
      node.style.backgroundColor = 'white';
  });
}

// Algoritmo BFS
function bfs() {
  resetVisualization();
  const startNode = parseInt(document.getElementById("startNode").value);
  const queue = [startNode];
  const visited = new Set();

  let i = 0;
  function step() {
      if (queue.length > 0) {
          const node = queue.shift();
          if (!visited.has(node)) {
              visited.add(node);
              highlightNode(node, 'purple'); // Visualización
              graph[node].forEach(neighbor => {
                  if (!visited.has(neighbor)) {
                      queue.push(neighbor);
                  }
              });
              setTimeout(step, 500); // Intervalo para la visualización paso a paso
          }
      }
  }
  step();
}

// Algoritmo DFS
function dfs() {
  resetVisualization();
  const startNode = parseInt(document.getElementById("startNode").value);
  const stack = [startNode];
  const visited = new Set();

  let i = 0;
  function step() {
      if (stack.length > 0) {
          const node = stack.pop();
          if (!visited.has(node)) {
              visited.add(node);
              highlightNode(node, 'blue'); // Visualización
              graph[node].forEach(neighbor => {
                  if (!visited.has(neighbor)) {
                      stack.push(neighbor);
                  }
              });
              setTimeout(step, 500); // Intervalo para la visualización paso a paso
          }
      }
  }
  step();
}

// Función para visualizar un nodo
function highlightNode(node, color) {
  const nodeElement = document.getElementById(`node-${node}`);
  if (nodeElement) {
      nodeElement.style.backgroundColor = color;
  }
}

// Dibuja los nodos en el contenedor de gráfico
function drawGraph() {
  const container = document.getElementById('graph-container');
  const positions = [
      { left: '50%', top: '10%' }, // Nodo 0
      { left: '20%', top: '40%' }, // Nodo 1
      { left: '80%', top: '40%' }, // Nodo 2
      { left: '10%', top: '80%' }, // Nodo 3
      { left: '35%', top: '80%' }, // Nodo 4
      { left: '70%', top: '80%' }  // Nodo 5
  ];

  for (const node in graph) {
      const nodeDiv = document.createElement('div');
      nodeDiv.classList.add('node');
      nodeDiv.id = `node-${node}`;
      nodeDiv.innerText = node;
      nodeDiv.style.left = positions[node].left;
      nodeDiv.style.top = positions[node].top;
      container.appendChild(nodeDiv);
  }
}

drawGraph();
