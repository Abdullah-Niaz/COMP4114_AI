In the realm of Artificial Intelligence (AI), **search** refers to a fundamental problem-solving technique where an intelligent agent explores a set of possible solutions, known as the **search space**, to find a sequence of actions that leads to a desired goal. This process is crucial for various AI applications, including route planning, game playing, and robotics.

At its core, a search problem in AI consists of four main components:

* **States:** A representation of the problem at a specific point in time.
* **Actions:** The possible moves or transitions between states.
* **Goal State:** The desired outcome or the solution to the problem.
* **Path Cost:** The resources (like time, distance, or effort) required to move from one state to another.

Search algorithms in AI are broadly categorized into two main types: **uninformed search** and **informed search**. The key difference lies in whether the algorithm uses any domain-specific knowledge to guide its search.

---

## Uninformed Search (Blind Search)

Uninformed search algorithms, also known as blind search, explore the search space without any information about the problem other than its definition. They systematically generate and test states until a goal is found. These methods are often less efficient but can be effective for smaller search spaces.

### Common Uninformed Search Algorithms:

* **Breadth-First Search (BFS):** This algorithm explores all the neighbor nodes at the current level before moving on to the nodes at the next level. It is guaranteed to find the shortest path in terms of the number of steps if one exists.
* **Depth-First Search (DFS):** This algorithm explores as far as possible along each branch before backtracking. It uses less memory than BFS but is not guaranteed to find the shortest path and can get stuck in infinite loops in certain graphs.
* **Uniform Cost Search (UCS):** An extension of BFS, UCS explores the node with the lowest path cost from the start node. It is guaranteed to find the path with the least total cost.
* **Depth-Limited Search (DLS):** A variation of DFS that imposes a limit on the depth of the search. This prevents the algorithm from getting stuck in very deep or infinite paths.
* **Iterative Deepening Depth-First Search (IDDFS):** This strategy combines the benefits of BFS and DFS. It performs a series of depth-limited searches, incrementally increasing the depth limit until a solution is found.

---

## Informed Search (Heuristic Search)

Informed search algorithms leverage domain-specific knowledge, in the form of a **heuristic function**, to make more intelligent choices about which path to explore next. A heuristic is an educated guess or an estimate of how close a state is to the goal. This guidance can significantly improve the efficiency of the search process, especially in large search spaces.

### Common Informed Search Algorithms:

* **Greedy Best-First Search:** This algorithm expands the node that it estimates to be closest to the goal, based solely on the heuristic value. While it is often fast, it does not always find the optimal solution as it ignores the cost of the path taken so far.
* **A\* Search (A-star):** One of the most popular and effective search algorithms, A\* combines the strengths of Uniform Cost Search and Greedy Best-First Search. It evaluates nodes by combining the cost to reach the node ($g(n)$) and the estimated cost to get from the node to the goal ($h(n)$). The evaluation function is typically represented as $f(n) = g(n) + h(n)$. A\* is guaranteed to find the optimal solution if the heuristic function is "admissible," meaning it never overestimates the actual cost to reach the goal.


| Uninformed Search | Informed Search |
| ------------------ | --------------- |
| Blind Search | Heuristic Search |
| No knowledge | Uses knowledge to find the best solution |
| More complexity | Less complexity |
| DFS, BFS | A*, Heuristic-based DFS, BFS |
