/***************************
* Autor: Equipo 2
* Estructuras Discretas
* 2024-1
****************************/

function valuap(respuest) {
    var reto;
    if (parseInt(respuest) == this.correcta) {
        // var reto;
        alert("Es correcta");
        reto = true;
        return reto;
    } else {
        alert("Es false");
        return reto;
    }
}

function pregunta(pregun, respuesta1, respuesta2, respuesta3, respuesta4, correcta) {
    this.pregun = pregun;
    this.respuestas = [];
    this.respuestas[0] = respuesta1;
    this.respuestas[1] = respuesta2;
    this.respuestas[2] = respuesta3;
    this.respuestas[3] = respuesta4;
    this.correcta = parseInt(correcta);
    this.ocupado = false;
    this.valuap = valuap;
}

var retorno = [];
var preguntas = [];
preguntas[0] = new pregunta("1.-¿Qué es un grafo?", "a) Una figura geométrica en dos dimensiones.", "b) Una estructura matemática compuesta por nodos y aristas.", "c) Un tipo de algoritmo de búsqueda.", "d) Un conjunto de números enteros.", 1);
preguntas[1] = new pregunta("2.-¿Quién fue el matemático que formuló el problema de los siete puentes de Königsberg?", "a) Gustav Kirchhoff", "b) Francis Guthrie", "c) Leonhard Euler", "d) Arthur Cayley", 2);
preguntas[2] = new pregunta("3.-¿Cuál es la principal utilidad del álgebra booleana en la informática?", "a) Resolver ecuaciones cuadráticas.", "b) Trabajar con valores de verdad en circuitos digitales.", "c) Calcular áreas y volúmenes.", "d) Realizar análisis estadísticos.", 1);
preguntas[3] = new pregunta("4.-¿Qué matemático utilizó la teoría de grafos para analizar circuitos eléctricos?", "a) Leonhard Euler", "b) Francis Guthrie", "c) Arthur Cayley", "d) Gustav Kirchhoff", 3);
preguntas[4] = new pregunta("5.-¿Qué término se utiliza para describir la relación entre elementos de dos conjuntos?", "a) Función", "b) Conjunto", "c) Relación", "d) Ciclo", 2);
preguntas[5] = new pregunta("6.-¿Cuál es una aplicación común de la teoría de grafos en el ámbito de la informática?", "a) Cálculo diferencial", "b) Modelar conexiones y flujos de datos", "c) Análisis estadístico", "d) Diseño gráfico", 1);
preguntas[6] = new pregunta("7.-¿Qué tipo de función vincula cada elemento de un conjunto con exactamente un elemento de otro conjunto sin repeticiones?", "a) Polinómicas", "b) Inyectiva", "c) Trozos", "d) Función constante", 1);
preguntas[7] = new pregunta("8.-¿Cuál es el propósito de los algoritmos de optimización en la teoría de grafos?", "a) Encontrar la media de un conjunto de datos.", "b) Determinar el camino más corto o el árbol de expansión mínima.", "c) Clasificar elementos en grupos.", "d) Resolver problemas algebraicos.", 1);
preguntas[8] = new pregunta("9._¿Qué elementos forman un grafo?", "a) Nodos y conexiones", "b) Vértices y aristas", "c) Puntos y líneas", "d) Círculos y triángulos", 1);
preguntas[9] = new pregunta("10._¿Cuál de las siguientes representaciones es común para grafos?", "a) Matriz de correlación", "b) Lista de adyacencia", "c) Tabla dinámica", "d) Gráfico de barras", 1);
preguntas[10] = new pregunta("11._¿Qué es la teoría de grafos?", "a) Una disciplina que estudia las matemáticas avanzadas", "b) Una disciplina que estudia las relaciones entre objetos mediante estructuras llamadas grafos", "c) Un método para resolver ecuaciones", "d) Una técnica de programación", 1);
preguntas[11] = new pregunta("12._¿Qué propiedad se utiliza para clasificar los grafos?", "a) Su tamaño", "b) Su forma", "c) Su clasificación como bipartitos, planos, densos o dispersos", "d) Su color", 2);
preguntas[12] = new pregunta("13._¿Qué algoritmo se utiliza para encontrar el camino más corto en un grafo ponderado?", "a) Algoritmo de Prim", "b) Algoritmo de Kruskal", "c) Algoritmo de Dijkstra", "d) Búsqueda en profundidad (DFS)", 2);
preguntas[13] = new pregunta("14._En el contexto de sistemas de recomendación, los grafos representan:", "a) Relaciones entre usuarios y productos", "b) Datos financieros entre empresas", "c) Información geográfica", "d) Estadísticas deportivas", 0);
preguntas[14] = new pregunta("15._¿Cuál es la función principal del algoritmo de Kruskal en la teoría de grafos?", "a) Encontrar el ciclo más largo en un grafo", "b) Determinar el árbol de expansión mínima", "c) Clasificar los vértices por grado", "d) Explorar todos los vértices del grafo", 1);
preguntas[15] = new pregunta("16._¿En qué aplicación se utilizan grafos para modelar rutas?", "a) Sistemas de recomendación", "b) Redes sociales", "c) Redes de transporte", "d) Biología computacional", 2);
preguntas[16] = new pregunta("17._¿Qué representa un vértice en un grafo?", "a) Representan las entidades u objetos de interés", "b) La conexión entre dos aristas", "c) Una colección de ciclos", "d) Un subgrafo completo", 0);
preguntas[17] = new pregunta("18._¿Qué es una arista en un grafo?", "a) Un nodo en el grafo", "b) Una conexión entre vértices", "c) El grado de un vértice", "d) Un camino cerrado en el grafo", 1);
preguntas[18] = new pregunta("19._¿Cómo se define una arista en un grafo no dirigido?", "a) Un vínculo que conecta dos vértices de una sola dirección", "b) Un nodo que conecta a otros vértices", "c) Un camino entre dos vértices sin dirección específica", "d) Una conexión que forma un ciclo", 2);
preguntas[19] = new pregunta("20._¿Cuál es el grado de un vértice?", "a) El número de vértices en el grafo", "b) La cantidad de aristas que llegan a él", "c) La longitud del ciclo en el que está", "d) La diferencia entre aristas entrantes y salientes", 1);
preguntas[20] = new pregunta("21._¿Qué tipo de grafo no tiene ningún ciclo?", "a) Grafo completo", "b) Grafo dirigido", "c) Árbol", "d) Grafo regular", 2);
preguntas[21] = new pregunta("22._¿Qué es un grafo simple?", "a) Un grafo sin aristas", "b) Un grafo con ciclos y vértices múltiples", "c) Un grafo que no tiene aristas múltiples ni lazos", "d) Un grafo completo", 2);
preguntas[22] = new pregunta("23._¿Qué tipo de grafo es aquel en el que cada vértice está conectado directamente con todos los demás vértices?", "a) Grafo dirigido", "b) Grafo completo", "c) Grafo acíclico", "d) Árbol", 1);
preguntas[23] = new pregunta("24._En un grafo no dirigido, si un vértice tiene grado cero, significa que:", "a) No tiene aristas conectadas a él", "b) Solo se conecta consigo mismo", "c) Solo conecta a vértices de otros grados", "d) Es parte de un ciclo", 0);
preguntas[24] = new pregunta("25._¿Qué representa una matriz de adyacencia en un grafo?", "a) La lista de vértices del grafo", "b) La lista de aristas no dirigidas", "c) Las conexiones entre cada par de vértices", "d) Los caminos más cortos entre vértices", 2);
preguntas[25] = new pregunta("26._En una matriz de adyacencia, un valor de '1' en la posición (i, j) indica que:", "a) No hay conexión entre los vértices i y j", "b) Hay una conexión entre los vértices i y j", "c) El vértice j es el grado de i", "d) La conexión es un ciclo", 1);
preguntas[26] = new pregunta("27._En un grafo dirigido, la matriz de adyacencia es:", "a) Simétrica respecto a su diagonal", "b) Asimétrica, ya que las aristas tienen dirección", "c) Siempre nula", "d) Igual a la lista de adyacencia", 1);
preguntas[27] = new pregunta("28._En un grafo no dirigido, ¿cómo se representa la conexión entre vértices en una matriz de adyacencia?", "a) Con valores de 0 en toda la fila", "b) Con valores de 1 en ambas posiciones (i, j) y (j, i)", "c) Solo con la suma de los grados de cada vértice", "d) Con valores negativos en la diagonal", 1);
preguntas[28] = new pregunta("29._En un grafo ponderado, ¿qué representa usualmente el valor en cada posición (i, j) de la matriz de adyacencia?", "a) La dirección de la arista entre los vértices i y j", "b) El número de aristas que conectan i y j", "c) El peso o costo asociado a la arista entre i y j", "d) El grado del vértice i", 2);
preguntas[29] = new pregunta("30._En una matriz de adyacencia, un lazo en un vértice i se representa como:", "a) Un valor de 1 en la posición (i,j) donde i≠j", "b) Un valor de 0 en la diagonal en la posición (i,i)", "c) Un valor de 1 en la posición (i,i), que indica una conexión del vértice consigo mismo", "d) Un valor en la posición (i,j) y en (j,i) si j es un vértice adyacente", 2);
preguntas[30] = new pregunta("31._¿Por qué la matriz de adyacencia de un grafo no dirigido es simétrica?", "a) Porque todos los vértices tienen el mismo grado", "b) Porque cada arista entre dos vértices i y j se representa igualmente en las posiciones (i,j) y (j,i)", "c) Porque el grafo no tiene lazos", "d) Porque el grafo sólo contiene aristas ponderadas", 1);
preguntas[31] = new pregunta("32._Según el teorema de la matriz de adyacencia, ¿qué información proporciona la n-ésima potencia de la matriz de adyacencia de un grafo?", "a) La cantidad total de vértices en el grafo", "b) El número de ciclos en el grafo de longitud n", "c) La cantidad de caminos de longitud n entre cada par de vértices", "d) La simetría de las conexiones en grafos dirigidos", 2);
preguntas[32] = new pregunta("33._¿Cuál es la idea básica detrás del algoritmo de búsqueda en anchura (BFS)?", "a) Penetrar tan profundamente como sea posible dentro de un árbol.", "b) Desplegarse a tantos vértices como sea posible antes de profundizar.", "c) Buscar los vértices con el valor más alto.", "d) Ignorar los vértices ya visitados para reducir tiempo.", 1);
preguntas[33] = new pregunta("34._¿En qué tipo de problemas es útil aplicar el algoritmo de búsqueda en anchura?", "a) En la detección de ciclos en un grafo.", "b) En problemas de conectividad y caminos más cortos en grafos no ponderados.", "c) Para buscar todos los vértices que sean hojas.", "d) En problemas de optimización de ciclos", 1);
preguntas[34] = new pregunta("35._¿Qué estructura de datos utiliza el algoritmo BFS para gestionar los vértices que se visitan?", "a) Pila", "b) Lista", "c) Cola", "d) Árbol", 2);
preguntas[35] = new pregunta("36._¿Cuál es la condición de finalización del algoritmo BFS?", "a) Cuando se han visitado todos los vértices al menos una vez.", "b) Cuando todos los vértices adyacentes al último han sido visitados.", "c) Cuando se recorre un ciclo dentro del grafo.", "d) Cuando la cola está vacía.", 3);
preguntas[36] = new pregunta("37._¿En qué se diferencia la estrategia de recorrido entre los algoritmos BFS y DFS?", "a) BFS explora en profundidad primero, mientras DFS explora en anchura.", "b) BFS utiliza una cola y DFS utiliza una pila.", "c) BFS recorre los vértices una sola vez, mientras DFS recorre cada vértice dos veces.", "d) No hay diferencia en la estrategia de recorrido.", 1);
preguntas[37] = new pregunta("38._¿Qué aplicaciones tiene el algoritmo de búsqueda en profundidad (DFS)?", "a) Detección de ciclos y análisis de componentes conexos.", "b) Optimización de caminos más cortos.", "c) Clasificación de grafos en bipartitos.", "d) Detección de caminos más cortos en redes ponderadas.", 2);
preguntas[38] = new pregunta("39._¿Qué ocurre en el algoritmo DFS cuando todos los vecinos de un vértice han sido visitados?", "a) Se detiene el algoritmo.", "b) Se reinicia el proceso con un nuevo vértice inicial.", "c) Se 'retrocede' al vértice anterior para explorar otros caminos.", "d) Se ignoran los vecinos que ya han sido visitados y se continúa", 2);
preguntas[39] = new pregunta("40._¿Cómo se inicia el recorrido en el algoritmo de búsqueda en profundidad (DFS)?", "a) Seleccionando un vértice aleatorio y añadiéndolo a una cola.", "b) Seleccionando un vértice inicial y añadiéndolo a una pila o llamando a una función recursiva.", "c) Marcando todos los vértices como visitados y realizando un recorrido secuencial.", "d) Seleccionando los vértices con menor grado de conexión", 1);
preguntas[40] = new pregunta("41._¿Que es un isomorfismo de grafos?", "a) Correspondencia uno a uno de un grafo", "b) La presencia de aristas que tienen una dirección específica", "c) La conexión entre dos aristas", "d) Un tipo de algoritmo de búsqueda", 0);
preguntas[41] = new pregunta("42._¿Qué correspondencia debe existir entre un grafo y otro para que sean isomorfos?", "a) Una correspondencia entre el valor del nodo", "b) Una correspondencia en dos dimensiones", "c) Una correspondencia entre los nodos", "d)Una correspondencia entre el nombre del nodo", 2);
preguntas[42] = new pregunta("43._¿Qué características deben de tener dos grafos para ser isomorfos?", "a)No tiene aristas conectadas a el", "b)El mismo número de vértices y el mismo número de arista", "c) Modelar conexiones y flujos de datos", "d) Resolver problemas algebraicos y clasificar elementos en grupos", 1);
preguntas[43] = new pregunta("44._¿De cuántas maneras debe verificarse si  f: V(G) -> V(G*). Sea n = Card(V(G)) = Card(V(G*))   ?", "a)Al menos 1 vez", "b)No se puede saber cuantas veces", "c)Se tendrían que examinar a lo mas n! posibles funciones.", "d) No es necesario revisar", 2);
preguntas[44] = new pregunta("45._Si dos grafos son isomorfos, ¿qué ocurre con los grados de sus vértices correspondientes?", "a)Son diferentes", "b)Los grados deben coincidir en los vértices correspondientes", "c) Los grados no afectan", "d) Los grados deben ser dobles en unos de los grafos", 1);
preguntas[45] = new pregunta("46._¿Cuál es la única forma segura de probar que dos grafos son isomorfos?", "a)  Verificar que tengan el mismo número de aristas", "b) Asegurarse de que tengan el mismo número de ciclos", "c) Comprobar la existencia de una función biyectiva que conserve la adyacencia", "d) Comprobar si ambos grafos son dirigidos", 2);
preguntas[46] = new pregunta("47._Si dos grafos tienen el mismo número de vértices y aristas, ¿qué podemos concluir sobre ellos?", "a) Son necesariamente isomorfos", "b) No son isomorfos", "c) Son idénticos en estructura", "d)Pueden ser isomorfos, pero no es seguro", 0);
preguntas[47] = new pregunta("48._¿Cuál es una manera útil de verificar si dos grafos no son isomorfos?", "a) Revisar si los grados de los vértices correspondientes son distintos.", "b) Comprobar si ambos grafos son dirigidos.", "c) Comprobar si tienen los mismos ciclos", "d) Ninguna de las anteriores", 0);
preguntas[48] = new pregunta("49._¿Qué papel juega el 'grado' de los vértices en la verificación de isomorfismo?", "a)Ayuda a confirmar que la cantidad de aristas es la misma", "b) Permite identificar si es posible una correspondencia entre vértices de igual grado", "c) Comprobar si tienen los mismos ciclos", "d) Determina si ambos grafos son conexos", 1);
preguntas[49] = new pregunta("50._Si un vértice v tiene grado 3 en un grafo G, ¿qué grado debe tener su correspondiente en el grafo isomorfo G*?", "a)0", "b) 3", "c)2", "d)  No tiene importancia el grado del vértice correspondiente", 1);
