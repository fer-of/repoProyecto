/***************************
* Autor: Equipo 2
* Estructuras Discretas
* 2024-1
****************************/

document.addEventListener('DOMContentLoaded', () => {
    const opciones = ['DFS', 'BFS', 'MatrizAdyacencia'];

    opciones.forEach(opcion => {
        const elemento = document.getElementById(opcion);
        if (elemento) {
            elemento.addEventListener('click', () => seleccionarOpcion(opcion));
        }
    });
});

function seleccionarOpcion(opcion) {
    // Oculta todas las secciones
    ocultarTodasLasOpciones();
    // Muestra la sección correspondiente a la opción seleccionada
    const elemento = document.getElementById(opcion);
    if (elemento) {
        elemento.classList.remove('oculto');
    }
}

function ocultarTodasLasOpciones() {
    const opciones = ['DFS', 'BFS', 'MatrizAdyacencia'];

    opciones.forEach(opcion => {
        const elemento = document.getElementById(opcion);
        if (elemento) {
            elemento.classList.add('oculto');
        }
    });
}

function bfs(graph, start) {
    const queue = [start];
    const visited = new Set();
    const result = [];
  
    while (queue.length) {
        const vertex = queue.shift();
  
        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);
  
            for (const neighbor of graph[vertex]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
  
    return result;
}

function dfs(graph, start) {
    const stack = [start];
    const visited = new Set();
    const result = [];
  
    while (stack.length) {
        const vertex = stack.pop();
  
        if (!visited.has(vertex)) {
            visited.add(vertex);
            result.push(vertex);
  
            for (const neighbor of graph[vertex]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
  
    return result;
}

// software.js
    
function iniciarBFS() {
    const startNode = document.getElementById('startNodeBFS').value;
    // Implementación del algoritmo BFS
    // ...
    document.getElementById('outputBFS').innerText = `Resultado del BFS desde el nodo ${startNode}`;
}

function reiniciarBFS() {
    document.getElementById('startNodeBFS').value = '';
    document.getElementById('outputBFS').innerText = '';
}

function iniciarDFS() {
    const startNode = document.getElementById('startNodeDFS').value;
    // Implementación del algoritmo DFS
    // ...
    document.getElementById('outputDFS').innerText = `Resultado del DFS desde el nodo ${startNode}`;
}

function reiniciarDFS() {
    document.getElementById('startNodeDFS').value = '';
    document.getElementById('outputDFS').innerText = '';
}

function generarMatrizAdyacencia() {
    const numNodos = document.getElementById('numNodos').value;
    // Implementación para generar la matriz de adyacencia
    // ...
    document.getElementById('outputMatrizAdyacencia').innerText = `Matriz de adyacencia generada para ${numNodos} nodos`;
}

function reiniciarMatrizAdyacencia() {
    document.getElementById('numNodos').value = '';
    document.getElementById('outputMatrizAdyacencia').innerText = '';
}// software.js
    
function iniciarBFS() {
    const startNode = document.getElementById('startNodeBFS').value;
    // Implementación del algoritmo BFS
    // ...
    document.getElementById('outputBFS').innerText = `Resultado del BFS desde el nodo ${startNode}`;
}

function reiniciarBFS() {
    document.getElementById('startNodeBFS').value = '';
    document.getElementById('outputBFS').innerText = '';
}

function iniciarDFS() {
    const startNode = document.getElementById('startNodeDFS').value;
    // Implementación del algoritmo DFS
    // ...
    document.getElementById('outputDFS').innerText = `Resultado del DFS desde el nodo ${startNode}`;
}

function reiniciarDFS() {
    document.getElementById('startNodeDFS').value = '';
    document.getElementById('outputDFS').innerText = '';
}

function generarMatrizAdyacencia() {
    const numNodos = document.getElementById('numNodos').value;
    // Implementación para generar la matriz de adyacencia
    // ...
    document.getElementById('outputMatrizAdyacencia').innerText = `Matriz de adyacencia generada para ${numNodos} nodos`;
}

function reiniciarMatrizAdyacencia() {
    document.getElementById('numNodos').value = '';
    document.getElementById('outputMatrizAdyacencia').innerText = '';
}