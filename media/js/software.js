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
  nodes.forEach(node => node.style.backgroundColor = 'white');
}

// Función para resaltar un nodo
function highlightNode(node, color) {
  const nodeElement = document.getElementById(`node-${node}`);
  if (nodeElement) {
    nodeElement.style.backgroundColor = color;
  }
}

// Algoritmo BFS
function bfs() {
  resetVisualization();
  const startNode = parseInt(document.getElementById("startNode").value);
  const queue = [startNode];
  const visited = new Set();

  function step() {
    if (queue.length > 0) {
      const node = queue.shift();
      if (!visited.has(node)) {
        visited.add(node);
        highlightNode(node, 'purple');
        graph[node].forEach(neighbor => {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        });
        setTimeout(step, 500);
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

  function step() {
    if (stack.length > 0) {
      const node = stack.pop();
      if (!visited.has(node)) {
        visited.add(node);
        highlightNode(node, 'blue');
        graph[node].forEach(neighbor => {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        });
        setTimeout(step, 500);
      }
    }
  }
  step();
}

// Dibuja los nodos en el contenedor del gráfico
function drawGraph() {
  const container = document.getElementById('graph-container');
  const positions = [
    { left: '50%', top: '5%' }, // Nodo 0
    { left: '20%', top: '40%' }, // Nodo 1
    { left: '80%', top: '30%' }, // Nodo 2
    { left: '10%', top: '80%' }, // Nodo 3
    { left: '40%', top: '60%' }, // Nodo 4
    { left: '70%', top: '80%' }  // Nodo 5
  ];

  Object.keys(graph).forEach(node => {
    const nodeDiv = document.createElement('div');
    nodeDiv.classList.add('node');
    nodeDiv.id = `node-${node}`;
    nodeDiv.innerText = node;
    nodeDiv.style.left = positions[node].left;
    nodeDiv.style.top = positions[node].top;
    container.appendChild(nodeDiv);
  });
}

// Función para actualizar la lista de orden de visita
function updateVisitedOrder(node) {
    const visitedOrderList = document.getElementById('visited-order-list');
    const listItem = document.createElement('li');
    listItem.innerText = `Nodo ${node}`;
    visitedOrderList.appendChild(listItem);
}

// Modificar las funciones de BFS y DFS para actualizar el orden de visita
function bfs() {
    resetVisualization();
    document.getElementById('visited-order-list').innerHTML = '';
    const startNode = parseInt(document.getElementById("startNode").value);
    const queue = [startNode];
    const visited = new Set();

    function step() {
        if (queue.length > 0) {
            const node = queue.shift();
            if (!visited.has(node)) {
                visited.add(node);
                highlightNode(node, 'purple');
                updateVisitedOrder(node);
                graph[node].forEach(neighbor => {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                });
                setTimeout(step, 500);
            }
        }
    }
    step();
}

function dfs() {
    resetVisualization();
    document.getElementById('visited-order-list').innerHTML = '';
    const startNode = parseInt(document.getElementById("startNode").value);
    const stack = [startNode];
    const visited = new Set();

    function step() {
        if (stack.length > 0) {
            const node = stack.pop();
            if (!visited.has(node)) {
                visited.add(node);
                highlightNode(node, 'blue');
                updateVisitedOrder(node);
                graph[node].forEach(neighbor => {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                });
                setTimeout(step, 500);
            }
        }
    }
    step();
}
drawGraph();